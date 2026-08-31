export type ContactPayload =
  | {
      kind: 'contact';
      name: string;
      email: string;
      phone: string;
      travelType: string;
      urgent: boolean;
      message: string;
      website: string;
    }
  | {
      kind: 'callback';
      phone: string;
      website: string;
    };

export const sendContactRequest = async (payload: ContactPayload) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || 'We could not send your request. Please try again.');
  }
};
