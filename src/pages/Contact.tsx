import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  ChevronDown
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

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
      answer: "We offer transparent monthly retainers starting at $495/month for individual executives. Enterprise packages for teams begin at $2,500/month. No hidden fees, no transaction charges."
    },
    {
      question: "Can you handle visa/documentation?",
      answer: "Absolutely. We manage everything from visa applications to travel insurance, ensuring you're always compliant and prepared for international travel."
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/90 z-10" />
          <img 
            src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Contact Haske" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Eliminate Your <br />
            <span className="text-gold italic">Travel Friction</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto font-light font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real people, real solutions, ready when you need us.
          </motion.p>
          
          {/* Response Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 border border-white/10">
              <Clock size={24} className="text-gold" />
              <div className="text-left">
                <div className="text-gold font-serif text-xl leading-none mb-1">2 Hours</div>
                <div className="text-cream/60 text-xs font-sans uppercase tracking-wider">Response Time</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 border border-white/10">
              <MessageCircle size={24} className="text-gold" />
              <div className="text-left">
                <div className="text-gold font-serif text-xl leading-none mb-1">24/7</div>
                <div className="text-cream/60 text-xs font-sans uppercase tracking-wider">Support Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Options */}
            <div className="space-y-16">
              {/* Immediate Assistance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif text-navy mb-8">
                  Immediate <span className="text-gold italic">Assistance</span>
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/+447340801274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-white shadow-lg shadow-navy/5 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gold/20"
                  >
                    <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-navy mb-1">WhatsApp Business</div>
                      <div className="text-charcoal/60 font-sans font-light text-sm">Click to chat instantly</div>
                    </div>
                  </a>

                  <a
                    href="tel:+442081911882"
                    className="flex items-center gap-6 p-6 bg-white shadow-lg shadow-navy/5 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gold/20"
                  >
                    <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-navy mb-1">UK Direct Line</div>
                      <div className="text-charcoal/60 font-sans font-light text-sm">+44 208 191 1882</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@haskeglobaltravel.com"
                    className="flex items-center gap-6 p-6 bg-white shadow-lg shadow-navy/5 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gold/20"
                  >
                    <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-navy mb-1">Priority Email</div>
                      <div className="text-charcoal/60 font-sans font-light text-sm">info@haskeglobaltravel.com</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* London Office Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif text-navy mb-6">London Headquarters</h3>
                <div className="bg-navy p-8 text-cream relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin size={20} className="text-gold mt-1" />
                      <div className="font-sans font-light leading-relaxed">
                        Suite 130, Lewisham Tower House,<br />
                        67-71 Lewisham High Street,<br />
                        SE13 5JX
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock size={20} className="text-gold" />
                      <span className="font-sans font-light">Mon-Fri: 7:00 AM - 9:00 PM GMT</span>
                    </div>
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
              <div className="bg-white p-8 md:p-10 shadow-2xl shadow-navy/5 border border-navy/5">
                <ContactForm title="Get Your Custom Travel Solution" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">
              Quick <span className="text-gold italic">Answers</span>
            </h2>
            <p className="text-lg text-charcoal/60 font-sans font-light">
              Common questions from executives like you.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-100 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left py-6 focus:outline-none group"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-serif text-navy group-hover:text-gold transition-colors duration-300">{faq.question}</h3>
                    <ChevronDown 
                      size={20} 
                      className={`text-gold transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === index ? 'auto' : 0, opacity: expandedFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-8">
                    <p className="text-charcoal/70 leading-relaxed font-sans font-light">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-navy text-cream border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-6">
              Prefer to <span className="text-gold italic">Schedule a Call?</span>
            </h2>
            <p className="text-lg text-cream/70 mb-10 font-sans font-light">
              Book directly with our team for an immediate consultation.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 font-sans font-medium tracking-wide uppercase hover:bg-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              <span>Schedule a Call</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;