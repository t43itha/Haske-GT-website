import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Corporate Travel',
    'Airport Transfers',
    'Chauffeur Service',
    'Private Tours'
  ];

  return (
    <footer className="bg-navy text-cream pb-20 lg:pb-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/HaskeHorizontalGold_New.png"
                alt="Haske Global Travel"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-cream/60 text-sm font-sans font-light leading-relaxed mb-6">
              Bespoke travel orchestration for discerning leaders who demand nothing less than perfection.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/+447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-cream/60 hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+971555734881"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-cream/60 hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:info@haskeglobaltravel.com"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-cream/60 hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 text-sm font-sans font-light"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 text-sm font-sans font-light"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-cream/60 text-sm font-sans font-light leading-relaxed">
                  Haske Global Travel & Tourism L.L.C S.O.C<br />
                  Office M07, Al Mulla-7 Building,<br />
                  Naif, Dubai, UAE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+971555734881" className="text-cream/60 hover:text-gold text-sm font-sans font-light transition-colors duration-300">
                  +971 55 573 4881
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@haskeglobaltravel.com" className="text-cream/60 hover:text-gold text-sm font-sans font-light transition-colors duration-300">
                  info@haskeglobaltravel.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Certifications */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <img
                  src="/iata-seeklogo-transparent.PNG"
                  alt="IATA"
                  className="w-10 h-10 object-contain opacity-80"
                />
                <div className="text-xs text-cream/40 font-sans uppercase tracking-wider leading-tight">
                  <div>IATA Certified</div>
                  <div>Travel Agency</div>
                </div>
              </div>
            </div>

            {/* Accepted Cards */}
            <div className="flex items-center gap-3" aria-label="Accepted payment cards">
              <span className="text-xs font-sans text-cream/40 uppercase tracking-wider mr-1">We accept</span>
              <img src="/visa-accepted.svg" alt="Visa accepted" className="h-9 w-auto" />
              <img src="/mastercard-accepted.svg" alt="Mastercard accepted" className="h-9 w-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="text-xs text-cream/40 font-sans text-center md:text-left">
              <div>&copy; {new Date().getFullYear()} Haske Global Travel & Tourism L.L.C S.O.C. All rights reserved.</div>
              <div className="mt-1">DET Licence No. 1485567 · TRN 105361952200003</div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-cream/40 font-sans">
              <Link to="/terms-and-conditions" className="hover:text-gold transition-colors duration-300">Terms & Conditions</Link>
              <Link to="/privacy-policy" className="hover:text-gold transition-colors duration-300">Privacy Policy</Link>
              <Link to="/refund-cancellation-policy" className="hover:text-gold transition-colors duration-300">Refund & Cancellation</Link>
              <Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
