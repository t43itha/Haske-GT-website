import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Palmtree, 
  Heart, 
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
      icon: <Briefcase size={32} />,
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
      icon: <Users size={32} />,
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
      icon: <Palmtree size={32} />,
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
      icon: <Heart size={32} />,
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
    { step: '01', title: 'Consultation', description: 'Understanding your travel DNA' },
    { step: '02', title: 'Curation', description: 'Building your executive profile' },
    { step: '03', title: 'Activation', description: '24/7 dedicated support' },
    { step: '04', title: 'Optimization', description: 'Continuous refinement' }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/90 z-10" />
          <img 
            src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="py-1 px-3 border border-gold/30 rounded-full bg-black/20 backdrop-blur-sm text-gold text-xs tracking-[0.3em] uppercase font-sans">
              Premium Services
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every Detail, <br />
            <span className="text-gold italic">Orchestrated to Perfection</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto font-light font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From boardroom to ballroom, we transform complex logistics into seamless experiences.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 md:p-10 shadow-xl shadow-navy/5 hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500 border border-transparent hover:border-gold/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 bg-navy/5 rounded-full text-gold group-hover:bg-navy group-hover:text-gold transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span className="text-xs font-sans tracking-widest uppercase text-charcoal/40 group-hover:text-gold transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif text-navy mb-2">{service.title}</h3>
                <h4 className="text-sm font-sans text-gold mb-4 tracking-wide uppercase">{service.subtitle}</h4>
                <p className="text-charcoal/70 mb-8 font-sans font-light leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="text-sm text-charcoal/60 font-sans font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-navy font-medium text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
                >
                  Inquire Now <ArrowRight size={16} className="text-gold" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-sans tracking-[0.3em] uppercase block mb-4">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream">
              From Chaos to <span className="text-gold italic">Choreography</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-serif text-white/5 mb-6">{step.step}</div>
                <h3 className="text-xl font-serif text-gold mb-3">{step.title}</h3>
                <p className="text-cream/60 text-sm font-sans font-light leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/10 -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy p-12 md:p-16 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="relative z-10 text-center">
              <Star size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />
              <h2 className="text-3xl md:text-4xl font-serif text-cream mb-12">
                Why Leaders Choose <span className="text-gold italic">Haske Global</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { title: 'Exclusive Access', desc: 'VIP treatment and upgrades unavailable to the public' },
                  { title: 'Proactive Care', desc: 'Problems solved before they impact your schedule' },
                  { title: 'Global Expertise', desc: 'Local knowledge in 50+ cities worldwide' }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-lg font-serif text-gold mb-3">{benefit.title}</h4>
                    <p className="text-cream/70 text-sm font-sans font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Crown size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
              Ready to Elevate Your Travel?
            </h2>
            <p className="text-lg text-charcoal/60 font-sans font-light">
              Let's discuss your bespoke travel requirements.
            </p>
          </motion.div>
          <div className="bg-white p-8 md:p-12 shadow-2xl shadow-navy/5 border border-navy/5">
            <ContactForm title="Request Your Custom Solution" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;