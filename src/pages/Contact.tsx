import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ChevronDown,
  ArrowRight,
  Plane
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionBadge from '../components/SectionBadge';
import usePageMeta from '../hooks/usePageMeta';

const Contact = () => {
  usePageMeta({
    title: 'Contact Us - 24/7 Travel Concierge',
    description: 'Contact Haske Global Travel & Tourism L.L.C S.O.C in Dubai for travel, tour, transfer and concierge services.'
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can you handle emergencies?",
      answer: "We monitor your flights 24/7 and often solve problems before you know they exist. For true emergencies, our direct airline partnerships mean we can secure alternatives within 30 minutes, not hours."
    },
    {
      question: "Do you work with specific airlines/hotels?",
      answer: "We maintain relationships with all major carriers and luxury hotel chains globally. This gives us access to inventory that's not available to the public, plus priority customer service lines."
    },
    {
      question: "What's your fee structure?",
      answer: "Our services use clear starting prices or an individual quotation. Your written quotation confirms the total price, applicable taxes, payment schedule and supplier terms before payment."
    },
    {
      question: "Can you handle visa/documentation?",
      answer: "Absolutely. We manage everything from visa applications to travel insurance, ensuring you're always compliant and prepared for international travel."
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      subtitle: 'Click to chat instantly',
      href: 'https://wa.me/+447340801274',
      external: true
    },
    {
      icon: Phone,
      title: 'Dubai Direct Line',
      subtitle: '+971 55 573 4881',
      href: 'tel:+971555734881',
      external: false
    },
    {
      icon: Mail,
      title: 'Priority Email',
      subtitle: 'info@haskeglobaltravel.com',
      href: 'mailto:info@haskeglobaltravel.com',
      external: false
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy z-10" />
          <img
            src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury travel background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 w-full">
          {/* Glassmorphism Card - Enhanced contrast for WCAG AA */}
          <motion.div
            className="bg-navy/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 lg:p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Icon */}
            <motion.div
              className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 border border-gold/20 text-gold mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Plane className="w-8 h-8" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="sr-only">Contact Haske Global Travel - </span>
              Your Next Journey Begins with a <span className="text-gold italic">Conversation</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-cream/80 max-w-xl mx-auto font-sans font-light leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the pinnacle of corporate travel. Our dedicated concierge team is available 24/7 to curate your itinerary.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/+447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex-1 h-14 flex items-center justify-center gap-3 bg-gold hover:bg-cream text-navy font-sans font-semibold tracking-wider uppercase transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Phone CTA */}
              <a
                href="tel:+971555734881"
                className="group w-full sm:w-auto flex-1 h-14 flex items-center justify-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-gold/50 text-cream font-sans font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>+971 55 573 4881</span>
              </a>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div
              className="inline-flex items-center justify-center gap-2 text-sm text-gold font-sans font-medium bg-navy/50 py-2 px-5 backdrop-blur-md border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Clock className="w-4 h-4 animate-pulse" />
              <span>Replies typically within 5 minutes</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Options */}
            <div className="space-y-12">
              {/* Immediate Assistance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <SectionBadge variant="light">Immediate Assistance</SectionBadge>
                <h2 className="text-2xl md:text-3xl font-serif text-navy mt-6 mb-8">
                  Connect <span className="text-gold italic">Directly</span>
                </h2>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-6 p-6 bg-white border border-gray-100 hover:border-gold/30 transition-all duration-300 group"
                    >
                      <div className="w-14 h-14 flex items-center justify-center bg-navy/5 text-gold group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-serif text-lg text-navy mb-1">{method.title}</div>
                        <div className="text-charcoal/60 font-sans text-sm">{method.subtitle}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Dubai Registered Office */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <SectionBadge variant="light">Registered Office</SectionBadge>
                <h3 className="text-2xl font-serif text-navy mt-6 mb-6">Dubai Office</h3>
                <div className="bg-navy p-8 text-cream">
                  <div className="space-y-6">
                    <p className="font-serif text-lg text-gold">Haske Global Travel & Tourism L.L.C S.O.C</p>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                      <div className="font-sans font-light leading-relaxed">
                        Office M07, Al Mulla-7 Building,<br />
                        Naif, Dubai, UAE
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                      <a href="tel:+971555734881" className="font-sans font-light hover:text-gold">+971 55 573 4881</a>
                    </div>
                    <p className="text-sm text-cream/60 font-sans">DET Licence No. 1485567 · TRN 105361952200003</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionBadge variant="light">Send a Message</SectionBadge>
              <h2 className="text-2xl md:text-3xl font-serif text-navy mt-6 mb-8">
                Start Your <span className="text-gold italic">Journey</span>
              </h2>
              <div className="bg-white p-8 md:p-10 border border-gray-100">
                <ContactForm title="Get Your Custom Travel Solution" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge>FAQs</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-serif text-cream mt-6">
              Quick <span className="text-gold italic">Answers</span>
            </h2>
            <p className="text-cream/60 font-sans mt-4">
              Common questions from executives like you.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-gold/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none group"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-serif text-cream group-hover:text-gold transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? 'auto' : 0,
                    opacity: expandedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-cream/70 leading-relaxed font-sans font-light">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge variant="light">Schedule</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mt-6 mb-4">
              Prefer to <span className="text-gold italic">Schedule a Call?</span>
            </h2>
            <p className="text-charcoal/60 font-sans mb-10 max-w-xl mx-auto">
              Book directly with our team for an immediate consultation.
            </p>
            <a
              href="tel:+971555734881"
              className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 font-sans font-semibold tracking-wider uppercase hover:bg-navy hover:text-cream transition-colors duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
