import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, CheckCircle, MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelType: string;
  urgent: boolean;
  message: string;
}

const ContactForm = ({ title = "Start Your Seamless Journey" }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
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
    if (!formData.email.trim()) newErrors.email = 'Email is required';
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
            href="https://wa.me/+447340801274"
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

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail size={20} />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-300 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@company.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone (Optional) */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Phone size={20} />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-300"
              placeholder="+44 123 456 7890"
            />
          </div>
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
          className="w-full bg-gold text-navy py-4 rounded-lg font-semibold hover:bg-gold-dark disabled:opacity-70 transition-colors duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <div className="w-6 h-6 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
          ) : (
            <>
              <Send size={20} />
              <span>Request Itinerary</span>
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