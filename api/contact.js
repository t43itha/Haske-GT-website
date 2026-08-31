const CONTACT_TYPES = new Set(['corporate', 'event', 'wellness', 'bespoke']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, maxLength) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const line = (label, value) => `${label}: ${value || 'Not provided'}`;

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof request.body === 'object' && request.body !== null ? request.body : {};

  // Honeypot: bots commonly fill hidden fields. Return success without sending.
  if (clean(body.website, 200)) {
    return response.status(200).json({ ok: true });
  }

  const kind = body.kind === 'callback' ? 'callback' : 'contact';
  const name = clean(body.name, 100);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 50);
  const travelType = clean(body.travelType, 30);
  const message = clean(body.message, 3000);
  const urgent = body.urgent === true;

  if (kind === 'callback' && !phone) {
    return response.status(400).json({ error: 'Please enter a phone number.' });
  }

  if (
    kind === 'contact' &&
    (!name || !EMAIL_PATTERN.test(email) || !CONTACT_TYPES.has(travelType))
  ) {
    return response.status(400).json({ error: 'Please check the required fields.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'info@haskeglobaltravel.com';
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    'Haske Website <website@mail.haskeglobaltravel.com>';

  if (!apiKey) {
    console.error('Contact form is missing RESEND_API_KEY.');
    return response.status(503).json({
      error: 'Online enquiries are temporarily unavailable. Please use WhatsApp or email us.',
    });
  }

  const subject =
    kind === 'callback'
      ? 'Website callback request'
      : `${urgent ? 'Urgent: ' : ''}${travelType} travel enquiry from ${name}`;

  const details =
    kind === 'callback'
      ? [line('Phone', phone)]
      : [
          line('Name', name),
          line('Email', email),
          line('Phone', phone),
          line('Travel type', travelType),
          line('Travel within 72 hours', urgent ? 'Yes' : 'No'),
          '',
          message || 'No additional details provided.',
        ];

  const html = details
    .map((detail) => `<p style="margin:0 0 12px">${escapeHtml(detail)}</p>`)
    .join('');

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: details.join('\n'),
        html,
        ...(email ? { reply_to: email } : {}),
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected a contact form email.', {
        status: resendResponse.status,
        response: await resendResponse.text(),
      });
      return response.status(502).json({
        error: 'We could not send your enquiry. Please use WhatsApp or email us directly.',
      });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form email failed.', error);
    return response.status(502).json({
      error: 'We could not send your enquiry. Please use WhatsApp or email us directly.',
    });
  }
}
