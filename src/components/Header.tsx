import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';
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

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top when navigating to a new page
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shouldUseDarkHeader = isScrolled;

  const navItems = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          shouldUseDarkHeader
            ? 'bg-navy/95 backdrop-blur-lg border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <Link to="/" onClick={handleNavClick} className="flex items-center z-50">
              <motion.img
                src="/HaskeHorizontalGold_New.png"
                alt="Haske Global Travel"
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24 lg:h-28'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-cream/60 hover:text-cream'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gold/50"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <Link
                to="/contact"
                className="hidden lg:flex items-center gap-2 px-4 py-2 border border-cream/20 text-cream/80 text-xs font-sans tracking-[0.15em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                Inquire Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 text-cream hover:text-gold transition-colors duration-300 z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
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
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-navy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full w-full flex flex-col lg:flex-row">
              {/* Navigation */}
              <div className="flex-1 flex items-center justify-center pt-24">
                <nav className="space-y-6 text-center">
                  {[{ name: 'Home', path: '/' }, ...navItems].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className={`group relative inline-block text-4xl md:text-5xl font-serif transition-colors duration-300 ${
                          location.pathname === item.path
                            ? 'text-gold italic'
                            : 'text-cream hover:text-gold'
                        }`}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="pb-16 px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/+447340801274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center border border-white/20 text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </a>
                    <a
                      href="tel:+442081911882"
                      className="w-12 h-12 flex items-center justify-center border border-white/20 text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
                      aria-label="Phone"
                    >
                      <Phone size={20} />
                    </a>
                    <a
                      href="mailto:info@haskeglobaltravel.com"
                      className="w-12 h-12 flex items-center justify-center border border-white/20 text-cream hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                  <p className="text-cream/40 text-xs font-sans tracking-wider uppercase">
                    24/7 Concierge Available
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
