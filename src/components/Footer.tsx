import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Shield, Award, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img 
                src="/HaskeHorizontalgold.png" 
                alt="Haske Global Travel" 
                className="h-36 w-auto object-contain opacity-90"
              />
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-md font-light">
              Luxury corporate travel management for executives who demand excellence.
            </p>
            
            {/* Contact Info - Separate Lines */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="font-light">UK: +44 208 191 1882</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span className="font-light">Ghana: +233 535703324</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span className="font-light">info@haskeglobaltravel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-medium mb-4 text-sm">Quick Links</h3>
            <div className="space-y-3">
              {[
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="block text-cream/70 hover:text-gold transition-colors duration-300 text-sm font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust & Credentials */}
          <div>
            <h3 className="text-gold font-medium mb-4 text-sm">Trust & Credentials</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Shield size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs font-light">IATA Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs font-light">ISO 27001 Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe size={16} className="text-gold flex-shrink-0" />
                <span className="text-xs font-light">London • Dubai • Accra</span>
              </div>
            </div>
            
            {/* IATA Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/iata-seeklogo-transparent.PNG" 
                alt="IATA Certified Agency" 
                className="w-16 h-16 object-contain opacity-90"
              />
              <div>
                <div className="text-xs font-medium text-gold">IATA Certified</div>
                <div className="text-xs text-cream/60 font-light">Travel Agency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 pt-6">
          <div className="text-center">
            <div className="text-xs text-cream/50 font-light">
              © 2025 Eugene Chauffeurs Ltd T/A Haske Global Travel. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;