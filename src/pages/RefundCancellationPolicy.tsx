import PolicyPage from '../components/PolicyPage';

const RefundCancellationPolicy = () => (
  <PolicyPage
    title="Refund & Cancellation Policy"
    description="Cancellation and refund terms for bookings arranged by Haske Global Travel."
  >
    <section>
      <h2>1. Cancellation requests</h2>
      <p>
        All cancellation requests must be made in writing to <a href="mailto:info@haskeglobaltravel.com">info@haskeglobaltravel.com</a>. Please include your name and quotation or booking reference.
      </p>
    </section>

    <section>
      <h2>2. Supplier terms</h2>
      <p>
        Refund eligibility depends on the terms of each airline, hotel, cruise line, ground transport provider and other supplier included in your booking. We will explain material cancellation terms in your quotation before payment.
      </p>
    </section>

    <section>
      <h2>3. Non-refundable payments</h2>
      <p>
        Some fares, services and deposits are non-refundable. Any known non-refundable amount will be identified in your quotation. Once confirmed with a supplier, cancellation charges may be up to the full booking value.
      </p>
    </section>

    <section>
      <h2>4. Approved refunds</h2>
      <p>
        Approved refunds are returned to the original payment method within 7–14 business days. Your bank or card issuer may require additional time to show the credit.
      </p>
    </section>

    <section>
      <h2>5. Changes</h2>
      <p>
        Date, name, route and service changes are subject to availability, supplier rules and any additional cost. We will confirm the cost before making the change.
      </p>
    </section>

    <section>
      <h2>6. No shipping</h2>
      <p>We provide travel and concierge services. No physical goods are shipped and no shipping policy applies.</p>
    </section>

    <section>
      <h2>7. Contact</h2>
      <p>
        Haske Global Travel & Tourism L.L.C S.O.C, Office M07, Al Mulla-7 Building, Naif, Dubai, UAE. Phone: <a href="tel:+971555734881">+971 55 573 4881</a>.
      </p>
    </section>
  </PolicyPage>
);

export default RefundCancellationPolicy;
