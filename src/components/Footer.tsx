import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Shield, Award, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-cream border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-6">
            <img
              src="/HaskeHorizontalgold.png"
              alt="Haske Global Travel"
              className="h-12 w-auto object-contain opacity-90"
            />
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <p className="hidden md:block text-cream/40 text-xs font-sans tracking-wide uppercase max-w-xs">
              Luxury corporate travel management
            </p>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex gap-6 md:gap-8">
            {[
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-cream/60 hover:text-gold transition-colors duration-300 text-xs font-sans tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-t border-white/5">
          {/* Contact - Compact */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-xs text-cream/60 font-sans">
              <Phone size={14} className="text-gold" />
              <span>UK: +44 208 191 1882</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-cream/60 font-sans">
              <Mail size={14} className="text-gold" />
              <span>info@haskeglobaltravel.com</span>
            </div>
          </div>

          {/* Trust - Compact */}
          <div className="flex items-center gap-6 md:justify-center">
            <div className="flex items-center gap-2 text-xs text-cream/60 font-sans">
              <Shield size={14} className="text-gold" />
              <span>IATA Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/60 font-sans">
              <Globe size={14} className="text-gold" />
              <span>Global Reach</span>
            </div>
          </div>

          {/* IATA Logo - Small */}
          <div className="flex items-center gap-3 md:justify-end">
            <img
              src="/iata-seeklogo-transparent.PNG"
              alt="IATA"
              className="w-8 h-8 object-contain opacity-80"
            />
            <div className="text-[10px] text-cream/40 font-sans uppercase tracking-wider leading-tight">
              <div>IATA Certified</div>
              <div>Travel Agency</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-cream/40 font-sans">
              © 2025 Eugene Chauffeurs Ltd T/A Haske Global Travel.
            </div>
            <div className="flex gap-6 text-xs text-cream/40 font-sans uppercase tracking-wider">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;