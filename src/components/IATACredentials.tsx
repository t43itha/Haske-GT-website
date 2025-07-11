import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const IATACredentials = () => {
  const location = useLocation();
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // Consider hero section as roughly the first viewport height
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Show IATA logo only when in the hero section (top portion of homepage)
      setIsInHeroSection(scrollPosition < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render on homepage - strict check
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <AnimatePresence>
      {isInHeroSection && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            animate={{ 
              y: [0, -6, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Logo Only - Clean floating design */}
            <img 
              src="/iata-seeklogo-transparent.PNG" 
              alt="IATA Certified" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
            />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-navy text-cream text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                IATA Certified Agency
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-navy"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IATACredentials;