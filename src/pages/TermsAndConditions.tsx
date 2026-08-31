import { Link } from 'react-router-dom';
import PolicyPage from '../components/PolicyPage';

const TermsAndConditions = () => (
  <PolicyPage
    title="Terms & Conditions"
    description="Terms for travel and concierge services provided by Haske Global Travel & Tourism L.L.C S.O.C."
  >
    <section>
      <h2>1. About us</h2>
      <p>
        These terms apply to services supplied by Haske Global Travel & Tourism L.L.C S.O.C, a Dubai-licensed tour operator with DET Licence No. 1485567.
      </p>
    </section>

    <section>
      <h2>2. Our services</h2>
      <p>
        We arrange travel, tours, flights, accommodation, airport transfers, chauffeur services, events and concierge services. Some services are supplied by independent airlines, hotels, cruise lines, transport providers and other partners.
      </p>
    </section>

    <section>
      <h2>3. Quotations and bookings</h2>
      <p>
        We provide a written quotation based on your requirements. Prices and availability may change until we confirm the booking. A booking is confirmed only when we accept your request and receive any payment due.
      </p>
      <p>
        Your quotation will state the services, price, currency, applicable taxes, deposit, balance schedule and important supplier conditions.
      </p>
    </section>

    <section>
      <h2>4. Payment</h2>
      <p>
        Payment is collected through a secure payment link issued against your written quotation. Deposits and balances must be paid by the dates shown in that quotation. We do not store your card details.
      </p>
      <p>Late payment may result in a change of price or loss of availability.</p>
    </section>

    <section>
      <h2>5. Changes and cancellations</h2>
      <p>
        Change and cancellation rights depend on the terms of each supplier. Please read our <Link to="/refund-cancellation-policy">Refund & Cancellation Policy</Link> before paying.
      </p>
    </section>

    <section>
      <h2>6. Traveller responsibilities</h2>
      <p>
        You are responsible for providing accurate traveller details and holding valid passports, visas, insurance and health documents. Please check all booking documents promptly and report any error.
      </p>
    </section>

    <section>
      <h2>7. Liability</h2>
      <p>
        We will provide our services with reasonable care. We are not responsible for events outside our reasonable control or for a supplier's acts where the law does not make us responsible. Nothing in these terms limits rights that cannot lawfully be excluded.
      </p>
    </section>

    <section>
      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of the United Arab Emirates and the Emirate of Dubai. The courts of Dubai will have jurisdiction, subject to any mandatory consumer rights.
      </p>
    </section>

    <section>
      <h2>9. Contact</h2>
      <p>
        Haske Global Travel & Tourism L.L.C S.O.C, Office M07, Al Mulla-7 Building, Naif, Dubai, UAE. Phone: <a href="tel:+971555734881">+971 55 573 4881</a>. Email: <a href="mailto:info@haskeglobaltravel.com">info@haskeglobaltravel.com</a>.
      </p>
    </section>
  </PolicyPage>
);

export default TermsAndConditions;
