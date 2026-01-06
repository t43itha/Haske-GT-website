import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';

interface CallbackRequestProps {
  variant?: 'dark' | 'light';
  title?: string;
}

const CallbackRequest = ({ variant = 'dark', title = 'Request a Callback' }: CallbackRequestProps) => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setLoading(true);
    // Simulate submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const isDark = variant === 'dark';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 p-4 ${isDark ? 'bg-gold/10 border-gold/20' : 'bg-green-50 border-green-200'} border`}
      >
        <CheckCircle className={`w-5 h-5 ${isDark ? 'text-gold' : 'text-green-600'}`} />
        <span className={`font-sans text-sm ${isDark ? 'text-cream' : 'text-charcoal'}`}>
          We'll call you within 15 minutes
        </span>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <p className={`text-xs font-sans mb-3 ${isDark ? 'text-cream/60' : 'text-charcoal/60'}`}>
        {title}
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-grow">
          <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`} />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
            className={`w-full pl-10 pr-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
              isDark
                ? 'bg-white/10 border border-white/20 text-cream placeholder-cream/40'
                : 'bg-white border border-gray-200 text-charcoal placeholder-charcoal/40'
            }`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 px-5 py-3 bg-gold text-navy font-sans font-semibold text-sm tracking-wider uppercase hover:bg-cream transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
          ) : (
            <>
              <span className="hidden sm:inline">Call Me</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CallbackRequest;
