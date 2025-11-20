import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          shouldUseDarkHeader 
            ? 'bg-navy/80 backdrop-blur-lg border-b border-white/5' 
            : 'bg-transparent'
        }`}
        style={{ minHeight: '8rem' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex items-center justify-between py-4 w-full">
            {/* Hamburger Menu - Left */}
            <button
              className="group flex items-center gap-3 text-white hover:text-gold transition-colors duration-300 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase hidden sm:block group-hover:tracking-[0.3em] transition-all duration-300">
                {isMobileMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>

            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 z-40">
              <Link to="/" onClick={handleNavClick} className="flex items-center">
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/HaskeHorizontalGold_New.png" 
                    alt="Haske Global Travel" 
                    className="w-auto h-32 md:h-36 lg:h-40 object-contain transition-all duration-500"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Support Button - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 z-40">
              <div className="text-right hidden xl:block">
                <div className="font-serif text-white leading-tight text-lg">
                  24/7 Support
                </div>
                <div className="text-[10px] text-gold uppercase tracking-widest leading-tight">Always Available</div>
              </div>
              <motion.a
                href="https://wa.me/+447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy p-3 rounded-full hover:bg-white transition-colors duration-300 shadow-lg shadow-gold/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>

            {/* Mobile Support Button */}
            <div className="lg:hidden flex items-center z-40">
              <motion.a
                href="https://wa.me/+447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy p-2.5 rounded-full hover:bg-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full w-full flex flex-col lg:flex-row">
              {/* Left Side - Navigation */}
              <div className="flex-1 flex items-center justify-center lg:justify-end lg:pr-20 pt-20 lg:pt-0">
                <nav className="space-y-6 lg:space-y-8 text-center lg:text-right">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`group relative inline-block text-4xl md:text-6xl font-serif transition-colors duration-300 ${
                          location.pathname === item.path
                            ? 'text-gold italic'
                            : 'text-cream hover:text-gold'
                        }`}
                        onClick={handleNavClick}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gold transform origin-right transition-transform duration-500 ${
                          location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-1/2 bg-white/10 self-center mx-10" />

              {/* Right Side - Contact Info */}
              <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-10 pb-20 lg:pb-0">
                <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h3 className="text-gold text-sm font-sans tracking-[0.2em] uppercase mb-4">Contact Us</h3>
                    <div className="space-y-4">
                      <a href="tel:+442081911882" className="block text-cream hover:text-gold transition-colors text-lg font-light">
                        +44 208 191 1882
                      </a>
                      <a href="mailto:info@haskeglobaltravel.com" className="block text-cream hover:text-gold transition-colors text-lg font-light">
                        info@haskeglobaltravel.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <h3 className="text-gold text-sm font-sans tracking-[0.2em] uppercase mb-4">Visit Us</h3>
                    <p className="text-cream/60 font-light leading-relaxed">
                      Suite 130, Lewisham Tower House<br />
                      67-71 Lewisham High Street<br />
                      London, SE13 5JX
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex justify-center lg:justify-start gap-4"
                  >
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300">
                      <MessageCircle size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300">
                      <Phone size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300">
                      <Mail size={18} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;