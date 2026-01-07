import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileCTA = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 px-6 py-4 safe-area-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <a
        href="https://wa.me/+447340801274"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 text-gold font-sans font-light text-xs tracking-[0.25em] uppercase transition-all duration-300"
      >
        <span>Speak with Concierge</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </motion.div>
  );
};

export default MobileCTA;
