import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  contactMethod: string;
  contactDetails: string;
  travelType: string;
  urgent: boolean;
  message: string;
}

const ContactForm = ({ title = "Start Your Seamless Journey" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contactMethod: 'email',
    contactDetails: '',
    travelType: '',
    urgent: false,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.contactDetails.trim()) newErrors.contactDetails = 'Contact details are required';
    if (!formData.travelType) newErrors.travelType = 'Please select a travel type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getContactIcon = () => {
    switch (formData.contactMethod) {
      case 'whatsapp': return <MessageCircle size={20} />;
      case 'phone': return <Phone size={20} />;
      default: return <Mail size={20} />;
    }
  };

  const getContactPlaceholder = () => {
    switch (formData.contactMethod) {
      case 'whatsapp': return '+233 535703324';
      case 'phone': return '+233 535703324';
      default: return 'your.email@company.com';
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-navy mb-4">
          Thank You!
        </h3>
        <p className="text-charcoal/70 mb-6">
          We've received your request and will respond within 2 hours. 
          For immediate assistance, please use WhatsApp.
        </p>
        <div className="space-y-3">
          <a
            href="https://wa.me/+233535703324"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gold text-navy px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors duration-300 shadow-lg"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-serif font-bold text-navy mb-6 text-center">
        {title}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-300 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Smith"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Contact Method */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Preferred Contact Method
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'email', label: 'Email', icon: <Mail size={20} /> },
              { value: 'phone', label: 'Phone', icon: <Phone size={20} /> },
              { value: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle size={20} /> },
            ].map((method) => (
              <button
                key={method.value}
                type="button"
                onClick={() => setFormData({ ...formData, contactMethod: method.value })}
                className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-300 ${
                  formData.contactMethod === method.value
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gray-200 hover:border-gold/50'
                }`}
              >
                {method.icon}
                <span className="text-sm mt-1">{method.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Contact Details *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {getContactIcon()}
            </div>
            <input
              type={formData.contactMethod === 'email' ? 'email' : 'tel'}
              value={formData.contactDetails}
              onChange={(e) => setFormData({ ...formData, contactDetails: e.target.value })}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-300 ${
                errors.contactDetails ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={getContactPlaceholder()}
            />
          </div>
          {errors.contactDetails && <p className="text-red-500 text-sm mt-1">{errors.contactDetails}</p>}
        </div>

        {/* Travel Type */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Travel Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'corporate', label: 'Corporate' },
              { value: 'event', label: 'Event' },
              { value: 'wellness', label: 'Wellness' },
              { value: 'bespoke', label: 'Bespoke' },
            ].map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setFormData({ ...formData, travelType: type.value })}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  formData.travelType === type.value
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gray-200 hover:border-gold/50'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          {errors.travelType && <p className="text-red-500 text-sm mt-1">{errors.travelType}</p>}
        </div>

        {/* Urgent Toggle */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="urgent"
            checked={formData.urgent}
            onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
            className="w-5 h-5 text-gold border-gray-300 rounded focus:ring-gold"
          />
          <label htmlFor="urgent" className="flex items-center space-x-2 text-sm font-medium text-charcoal">
            <Clock size={16} />
            <span>I need travel within 72 hours</span>
          </label>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Additional Details (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-300"
            placeholder="Tell us about your travel requirements..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy text-cream py-4 rounded-lg font-semibold hover:bg-navy/90 disabled:opacity-70 transition-colors duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
          ) : (
            <>
              <Send size={20} />
              <span>Send Request</span>
            </>
          )}
        </motion.button>

        <p className="text-xs text-gray-500 text-center">
          We'll respond within 2 hours. For immediate assistance, use WhatsApp.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;