import { useState } from 'react';
import { AlertCircle, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendContactRequest } from '../lib/contact';

interface CallbackRequestProps {
  variant?: 'dark' | 'light';
  title?: string;
}

const CallbackRequest = ({ variant = 'dark', title = 'Request a Callback' }: CallbackRequestProps) => {
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const isDark = variant === 'dark';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendContactRequest({ kind: 'callback', phone, website });
      setPhone('');
      setWebsite('');
      setStatus('success');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'We could not send your request.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <p className={`text-xs font-sans mb-3 ${isDark ? 'text-cream/60' : 'text-charcoal/60'}`}>{title}</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="callback-website">Website</label>
          <input id="callback-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <div className="relative flex-grow">
          <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`} />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" required aria-label="Your phone number" disabled={status === 'sending'} className={`w-full pl-10 pr-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-60 ${isDark ? 'bg-white/10 border border-white/20 text-cream placeholder-cream/40' : 'bg-white border border-gray-200 text-charcoal placeholder-charcoal/40'}`} />
        </div>
        <button type="submit" disabled={status === 'sending'} className="flex items-center justify-center gap-2 px-5 py-3 bg-gold text-navy font-sans font-semibold text-sm tracking-wider uppercase hover:bg-cream transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed">
          <span className="hidden sm:inline">{status === 'sending' ? 'Sending…' : 'Call Me'}</span>
          {status === 'sending' ? <span className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" aria-hidden="true" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
      {status === 'success' && <p role="status" className={`flex items-center gap-2 text-xs mt-2 ${isDark ? 'text-gold' : 'text-green-700'}`}><CheckCircle className="w-4 h-4" />Request sent.</p>}
      {status === 'error' && <p role="alert" className={`flex items-start gap-2 text-xs mt-2 ${isDark ? 'text-red-300' : 'text-red-700'}`}><AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />{errorMessage}</p>}
      <p className={`text-xs mt-2 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>We use your number only to respond. <Link to="/privacy-policy" className="underline hover:text-gold">Privacy Policy</Link>.</p>
    </div>
  );
};

export default CallbackRequest;
