import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when navigating to a new page
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if we're on homepage (which has dark hero) or other pages (which have light backgrounds)
  const isHomepage = location.pathname === '/';
  
  // Header should be dark on non-homepage or when scrolled
  const shouldUseDarkHeader = !isHomepage || isScrolled;

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        shouldUseDarkHeader 
          ? 'bg-navy/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ minHeight: '7rem' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between py-4 w-full">
          {/* Hamburger Menu - Left */}
          <button
            className="flex items-center space-x-2 text-white hover:text-gold transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
            <span className="text-sm font-medium">Menu</span>
          </button>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" onClick={handleNavClick} className="flex items-center">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/HaskeHorizontalgold.png" 
                  alt="Haske Global Travel" 
                  className="w-auto h-20 object-contain transition-all duration-500"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Support Button - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            <div className="text-xs text-right">
              <div className="font-medium text-white leading-tight">
                24/7 Support
              </div>
              <div className="text-xs text-gold leading-tight">Always Available</div>
            </div>
            <motion.a
              href="https://wa.me/+447340801274"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy p-2.5 rounded-full hover:bg-gold/90 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>

          {/* Tablet Support Button - Icon Only */}
          <div className="hidden md:flex lg:hidden items-center flex-shrink-0">
            <motion.a
              href="https://wa.me/+447340801274"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy p-2.5 rounded-full hover:bg-gold/90 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>

          {/* Mobile - Call CTA + Menu Button */}
          <div className="md:hidden flex items-center space-x-3 flex-shrink-0">
            {/* Call Us CTA - Mobile Only */}
            <motion.a
              href="tel:+442081911882"
              className="flex items-center space-x-2 bg-gold text-navy px-3 py-2 rounded-full hover:bg-gold/90 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Talk To Us</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full md:w-80 bg-navy/98 backdrop-blur-md shadow-xl border-t border-gold/20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-3">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-gold bg-gold/10'
                        : 'text-cream hover:text-gold hover:bg-gold/5'
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Contact Section - Compact */}
              <div className="pt-3 border-t border-gold/20">
                <div className="text-center text-cream mb-3">
                  <div className="text-sm font-medium">24/7 Support</div>
                  <div className="text-xs text-gold">Always Available</div>
                </div>
                
                {/* Contact Options - Horizontal on Desktop */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                  <a
                    href="https://wa.me/+447340801274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-700 transition-colors duration-300 shadow-md text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="tel:+442081911882"
                    className="flex items-center justify-center space-x-2 bg-gold text-navy py-2 px-3 rounded-md hover:bg-gold/90 transition-colors duration-300 shadow-md text-sm"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;