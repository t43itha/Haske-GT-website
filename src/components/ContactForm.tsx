import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Send, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendContactRequest } from '../lib/contact';

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelType: string;
  urgent: boolean;
  message: string;
  website: string;
}

type FormErrors = Partial<Record<'name' | 'email' | 'travelType', string>>;
type SubmitStatus = { type: 'idle' | 'sending' | 'success' | 'error'; message?: string };

const ContactForm = ({ title = 'Start Your Seamless Journey' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', travelType: '', urgent: false, message: '', website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>({ type: 'idle' });

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.travelType) newErrors.travelType = 'Please select a travel type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'idle' });
    if (!validateForm()) return;

    setStatus({ type: 'sending' });

    try {
      await sendContactRequest({ kind: 'contact', ...formData });
      setFormData({
        name: '', email: '', phone: '', travelType: '', urgent: false, message: '', website: '',
      });
      setStatus({ type: 'success', message: 'Thank you. Your enquiry has been sent.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'We could not send your enquiry.',
      });
    }
  };

  return (
    <motion.div className="bg-white rounded-2xl shadow-xl p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h3 className="text-2xl font-serif font-bold text-navy mb-6 text-center">{title}</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
        </div>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
          <input id="contact-name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="John Smith" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input id="contact-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="your.email@company.com" />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-2">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input id="contact-phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" placeholder="+971 50 123 4567" />
          </div>
        </div>

        <fieldset>
          <legend className="block text-sm font-medium text-charcoal mb-2">Travel Type *</legend>
          <div className="grid grid-cols-2 gap-3">
            {[{ value: 'corporate', label: 'Corporate' }, { value: 'event', label: 'Event' }, { value: 'wellness', label: 'Wellness' }, { value: 'bespoke', label: 'Bespoke' }].map((type) => (
              <button key={type.value} type="button" onClick={() => setFormData({ ...formData, travelType: type.value })} className={`p-3 rounded-lg border-2 transition-all ${formData.travelType === type.value ? 'border-gold bg-gold/10 text-gold' : 'border-gray-200 hover:border-gold/50'}`}>
                {type.label}
              </button>
            ))}
          </div>
          {errors.travelType && <p className="text-red-500 text-sm mt-1">{errors.travelType}</p>}
        </fieldset>

        <div className="flex items-center space-x-3">
          <input type="checkbox" id="urgent" checked={formData.urgent} onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })} className="w-5 h-5 text-gold border-gray-300 rounded focus:ring-gold" />
          <label htmlFor="urgent" className="flex items-center space-x-2 text-sm font-medium text-charcoal"><Clock size={16} /><span>I need travel within 72 hours</span></label>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-2">Additional Details (Optional)</label>
          <textarea id="contact-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" placeholder="Tell us about your travel requirements..." />
        </div>

        <motion.button type="submit" disabled={status.type === 'sending'} className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed" whileHover={status.type === 'sending' ? undefined : { scale: 1.02 }} whileTap={status.type === 'sending' ? undefined : { scale: 0.98 }}>
          {status.type === 'sending' ? <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" aria-hidden="true" /> : <Send size={20} />}
          <span>{status.type === 'sending' ? 'Sending…' : 'Send Enquiry'}</span>
        </motion.button>

        {status.type === 'success' && <p role="status" className="flex items-center justify-center gap-2 text-sm text-green-700"><CheckCircle size={18} />{status.message}</p>}
        {status.type === 'error' && <p role="alert" className="flex items-start justify-center gap-2 text-sm text-red-700"><AlertCircle size={18} className="mt-0.5 shrink-0" />{status.message}</p>}

        <p className="text-xs text-gray-500 text-center">We use your details only to respond to this enquiry. See our <Link to="/privacy-policy" className="underline hover:text-gold">Privacy Policy</Link>.</p>
        <a href="https://wa.me/+447340801274" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm text-gold-dark hover:text-navy"><MessageCircle size={18} /> Immediate help on WhatsApp</a>
      </form>
    </motion.div>
  );
};

export default ContactForm;
