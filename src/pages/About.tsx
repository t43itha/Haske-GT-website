import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Zap, 
  Globe,
  Crown,
  Gem
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Executives Served', icon: <Users size={20} /> },
    { number: '15k+', label: 'Hours Saved', icon: <Clock size={20} /> },
    { number: '03', label: 'Global Offices', icon: <Globe size={20} /> },
    { number: '99%', label: 'Success Rate', icon: <Shield size={20} /> }
  ];

  const pillars = [
    {
      title: 'Proactive Intelligence',
      description: 'We solve problems before you know they exist',
      details: 'Our monitoring systems track weather patterns, airline schedules, and global events to anticipate disruptions. When your flight gets cancelled, we\'ve already secured your alternative.',
      icon: <Zap size={32} />
    },
    {
      title: 'Global Mastery',
      description: 'Local expertise in 50+ cities, one dedicated contact',
      details: 'Whether you\'re landing in Lagos or lunching in London, our local teams know the shortcuts, the best restaurants, and the right people to call.',
      icon: <Globe size={32} />
    },
    {
      title: 'Exclusive Access',
      description: 'VIP treatment and upgrades unavailable to the public',
      details: 'Direct airline partnerships, luxury hotel relationships, and diplomatic protocols give you access to experiences money alone can\'t buy.',
      icon: <Crown size={32} />
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/80 z-10" />
          <img 
            src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="About Haske" 
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
              Our Story
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built by Travelers, <br />
            <span className="text-gold italic">For Leaders</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto font-light font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Because scrambling with travel logistics wastes your valuable time.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 border border-white/10">
                <div className="text-gold">{stat.icon}</div>
                <div className="text-left">
                  <div className="text-gold font-serif text-lg leading-none mb-1">{stat.number}</div>
                  <div className="text-cream/60 text-xs font-sans uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
                Born from Frustration, <br />
                <span className="text-gold italic">Perfected Through Experience</span>
              </h2>
              <div className="space-y-6 text-lg text-charcoal/70 font-sans font-light leading-relaxed">
                <p>
                  In 2018, our founder missed a critical $2M merger meeting due to a 'luxury' travel agency's incompetence. That disaster sparked Haske Global Travel.
                </p>
                <p>
                  Today, we prevent those disasters for 500+ executives worldwide. Not through promises, but through obsessive preparation and genuine global presence.
                </p>
                <p className="font-medium text-navy border-l-2 border-gold pl-6">
                  We maintain offices in London, Dubai, and Accra—not call centers, but local experts who know every concierge, every shortcut, every solution.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full opacity-20" />
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Executive Travel" 
                className="relative z-10 w-full h-auto shadow-2xl shadow-navy/20 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-navy p-8 z-20 max-w-xs">
                <Award size={32} className="text-gold mb-4" />
                <p className="text-cream/80 font-serif italic text-lg">
                  "Redefining what it means to travel for business."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Crown size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
              Why We're <span className="text-gold italic">Different</span>
            </h2>
            <p className="text-lg text-cream/60 max-w-2xl mx-auto font-sans font-light">
              Three fundamental principles that separate us from traditional travel agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-10 border border-white/10 hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                <h3 className="text-2xl font-serif text-cream mb-4">{pillar.title}</h3>
                <p className="text-cream/80 mb-6 font-sans font-light">{pillar.description}</p>
                <p className="text-cream/50 text-sm leading-relaxed font-sans font-light border-t border-white/10 pt-6">
                  {pillar.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-navy mb-8">
                Global Presence, <br />
                <span className="text-gold italic">Local Expertise</span>
              </h2>
              <div className="space-y-8">
                {[
                  { city: 'London', region: 'Europe & UK', description: 'Headquarters', flag: '🇬🇧' },
                  { city: 'Dubai', region: 'Middle East & Asia', description: 'Regional Hub', flag: '🇦🇪' },
                  { city: 'Accra', region: 'West Africa', description: 'Local Expertise', flag: '🇬🇭' }
                ].map((office, index) => (
                  <div key={index} className="flex items-start gap-6 p-6 border-b border-gray-100 last:border-0">
                    <div className="text-4xl grayscale opacity-80">{office.flag}</div>
                    <div>
                      <h3 className="text-xl font-serif text-navy mb-1">{office.city}</h3>
                      <div className="text-gold text-xs font-sans uppercase tracking-wider mb-2">{office.region}</div>
                      <p className="text-charcoal/60 text-sm font-sans font-light">{office.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-navy p-10 text-cream"
            >
              <Shield size={40} className="text-gold mb-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif mb-8">Certifications & Standards</h3>
              <div className="space-y-4">
                {[
                  'IATA Certified Agency',
                  'ISO 27001 Security Standard',
                  'Virtuoso Luxury Network',
                  'PCI DSS Compliant',
                  '256-bit Data Encryption'
                ].map((credential, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-white/10 last:border-0">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="font-sans font-light text-cream/80">{credential}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;