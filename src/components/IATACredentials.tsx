import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Plane } from 'lucide-react';

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
          className="fixed bottom-20 lg:bottom-6 right-6 z-40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            {/* Modern IATA Badge */}
            <div className="flex flex-col items-end opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Plane className="w-6 h-6 text-cream -rotate-45" strokeWidth={1.5} />
                <div className="flex flex-col leading-none text-cream">
                  <span className="font-bold text-sm tracking-wide">IATA</span>
                  <span className="text-[0.6rem] font-light tracking-wider uppercase opacity-70">Accredited Agent</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IATACredentials;