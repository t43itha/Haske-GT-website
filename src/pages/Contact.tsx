import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar
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
    <div className="pt-28">
      {/* Hero Section - Standardized with About page image */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy/95 to-navy/90">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Eliminate Your
            <span className="text-gold block font-extralight italic">Travel Friction</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real people, real solutions, ready when you need us
          </motion.p>
          
          {/* Two Response Boxes */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-cream/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-gold">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-gold font-medium">2 Hours</div>
                <div className="text-cream/80 text-sm font-light">Response Time</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-cream/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-gold">
                <MessageCircle size={20} />
              </div>
              <div>
                <div className="text-gold font-medium">24 Hours</div>
                <div className="text-cream/80 text-sm font-light">Solution Delivery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Options */}
            <div className="space-y-12">
              {/* Immediate Assistance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light text-navy mb-8">
                  Immediate <span className="text-gold italic font-extralight">Assistance</span>
                </h2>
                <div className="space-y-6">
                  <motion.a
                    href="https://wa.me/+447340801274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600 transition-colors duration-300">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">WhatsApp Business</div>
                      <div className="text-charcoal/70 font-light">Click to chat instantly</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+442081911882"
                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-cream group-hover:bg-navy/90 transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">UK Direct Line</div>
                      <div className="text-charcoal/70 font-light">+44 208 191 1882</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+233535703324"
                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-cream group-hover:bg-navy/90 transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">Ghana Direct Line</div>
                      <div className="text-charcoal/70 font-light">+233 535703324</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="mailto:info@haskeglobaltravel.com"
                    className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy group-hover:bg-gold/90 transition-colors duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-medium text-navy">Priority Email</div>
                      <div className="text-charcoal/70 font-light">info@haskeglobaltravel.com</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* London Office Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-medium text-navy mb-6">London Office</h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-navy">London</h4>
                      <p className="text-gold font-light">Headquarters</p>
                    </div>
                    <button className="text-gold hover:text-gold/80 transition-colors duration-300">
                      <MapPin size={20} />
                    </button>
                  </div>
                  <div className="space-y-2 text-sm text-charcoal/70 font-light">
                    <div className="flex items-start space-x-2">
                      <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <div>Suite 130, Lewisham Tower House,</div>
                        <div>67-71 Lewisham High Street,</div>
                        <div>SE13 5JX</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>Mon-Fri: 7:00 AM - 9:00 PM GMT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span>+44 208 191 1882</span>
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
              <ContactForm title="Get Your Custom Travel Solution" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-navy mb-6">
              Quick <span className="text-gold italic font-extralight">Answers</span>
            </h2>
            <p className="text-xl text-charcoal/80 font-light">
              Common questions from executives like you
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-cream rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left p-6 hover:bg-cream/80 transition-colors duration-300 focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-navy pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-navy"></div>
                        <div className="w-0.5 h-4 bg-navy absolute"></div>
                      </div>
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-charcoal/80 leading-relaxed font-light">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-navy text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">
              Prefer to <span className="text-gold italic font-extralight">Schedule a Call?</span>
            </h2>
            <p className="text-xl text-cream/90 mb-8 font-light">
              Book directly with our team for an immediate consultation
            </p>
            <motion.button
              className="inline-flex items-center space-x-2 bg-gold text-navy px-8 py-4 rounded-lg font-medium text-lg hover:bg-gold/90 transition-colors duration-300"
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