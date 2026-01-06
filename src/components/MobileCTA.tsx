import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileCTA = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-4 py-3 safe-area-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center justify-center gap-3 max-w-lg mx-auto">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+447340801274"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gold text-navy py-3 px-4 font-sans font-semibold text-sm tracking-wide hover:bg-gold-dark transition-colors duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+442081911882"
          className="flex-1 flex items-center justify-center gap-2 border border-white/20 text-cream py-3 px-4 font-sans font-semibold text-sm tracking-wide hover:border-gold hover:text-gold transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileCTA;
