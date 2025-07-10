import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <motion.a
        href="https://wa.me/+233535703324?text=Hello, I'm interested in your luxury travel services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-gold text-navy px-4 py-3 rounded-full shadow-lg hover:bg-gold/90 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloat;