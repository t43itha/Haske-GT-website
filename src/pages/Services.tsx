import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Palmtree, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Crown,
  Gem,
  Star
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Services = () => {
  const [expandedService, setExpandedService] = React.useState<number | null>(null);

  const services = [
    {
      icon: <Briefcase size={28} />,
      title: 'Corporate Travel',
      subtitle: 'Executive-Grade Precision',
      description: 'Seamless business travel orchestration for leaders who demand excellence.',
      features: [
        'Dedicated travel curator',
        'VIP lounge access worldwide',
        'Instant rebooking protocols',
        'Consolidated reporting'
      ],
      image: 'https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Users size={28} />,
      title: 'Event Coordination',
      subtitle: 'Flawless Group Logistics',
      description: 'Board meetings to product launches—handled with military precision.',
      features: [
        'Venue sourcing & negotiation',
        'Guest logistics management',
        'On-site coordination',
        'Budget optimization'
      ],
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Palmtree size={28} />,
      title: 'Bespoke Leisure',
      subtitle: 'Private Journeys Perfected',
      description: 'Exclusive experiences crafted for discerning travelers.',
      features: [
        'Exclusive access experiences',
        'Private jet coordination',
        'Michelin-starred reservations',
        'Cultural immersion programs'
      ],
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Heart size={28} />,
      title: 'Wellness Retreats',
      subtitle: 'Executive Restoration',
      description: 'Curated wellness experiences for peak performance leaders.',
      features: [
        'Executive health retreats',
        'Team wellness programs',
        'Spa & medical tourism',
        'Digital detox destinations'
      ],
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const processSteps = [
    { step: 1, title: 'Consultation', description: 'Understanding your travel DNA' },
    { step: 2, title: 'Curation', description: 'Building your executive profile' },
    { step: 3, title: 'Activation', description: '24/7 dedicated support' },
    { step: 4, title: 'Optimization', description: 'Continuous refinement' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Standardized */}
      <section className="relative py-24 bg-gradient-to-br from-black via-navy to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Gem size={16} className="text-gold" />
            <span className="text-gold text-sm font-light tracking-wide">PREMIUM SERVICES</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-light text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every Detail,
            <span className="text-gold block font-extralight italic">Orchestrated To Perfection</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From boardroom to ballroom, we transform complex logistics into seamless experiences
          </motion.p>
        </div>
      </section>

      {/* Services Grid - Compact */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-40 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-gold group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-navy mb-1">{service.title}</h3>
                  <h4 className="text-sm font-light text-gold mb-3 uppercase tracking-wide">{service.subtitle}</h4>
                  <p className="text-charcoal/70 mb-4 text-sm leading-relaxed font-light">{service.description}</p>
                  
                  <motion.button
                    className="flex items-center justify-between w-full text-left group/btn"
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    whileHover={{ scale: 1.01 }}
                  >
                    <span className="text-navy font-light text-sm">View Details</span>
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gold group-hover/btn:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: expandedService === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                          <span className="text-charcoal/60 text-sm font-light">{feature}</span>
                        </div>
                      ))}
                      <motion.button
                        className="mt-4 bg-navy text-cream px-4 py-2 rounded-lg text-sm font-light hover:bg-navy/90 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Inquire Now
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Streamlined */}
      <section className="py-16 bg-gradient-to-br from-navy via-black to-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Crown size={20} className="text-gold" />
              <span className="text-gold text-sm uppercase tracking-widest font-light">Our Process</span>
            </div>
            <h2 className="text-4xl font-light text-cream mb-4">
              From Chaos to <span className="text-gold italic font-extralight">Choreography</span>
            </h2>
          </motion.div>

          {/* Horizontal Process Flow */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center text-navy font-medium mx-auto">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-px bg-gold/20 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-lg font-light text-cream mb-2">{step.title}</h3>
                  <p className="text-cream/60 text-sm font-light">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Compact */}
      <section className="py-16 bg-gradient-to-br from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-8 border border-gold/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <Star size={32} className="text-gold mx-auto mb-4" />
              <h3 className="text-3xl font-light text-navy mb-4">
                Why Leaders Choose <span className="text-gold italic font-extralight">Haske Global</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Exclusive Access', desc: 'VIP treatment and upgrades unavailable to the public' },
                { title: 'Proactive Care', desc: 'Problems solved before they impact your schedule' },
                { title: 'Global Expertise', desc: 'Local knowledge in 50+ cities worldwide' }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-light text-navy mb-2">{benefit.title}</h4>
                  <p className="text-charcoal/70 text-sm font-light">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Compact */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-black to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-px bg-gold" />
              <Crown size={20} className="text-gold" />
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="text-4xl font-light text-cream mb-4">
              Ready to Elevate Your Travel?
            </h2>
            <p className="text-lg text-cream/70 font-light">
              Let's discuss your bespoke travel requirements
            </p>
          </motion.div>
          <ContactForm title="Request Your Custom Solution" />
        </div>
      </section>
    </div>
  );
};

export default Services;