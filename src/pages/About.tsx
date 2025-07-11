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
    { number: '500+', label: 'Executives Served', icon: <Users size={24} /> },
    { number: '15,000+', label: 'Hours Saved', icon: <Clock size={24} /> },
    { number: '3', label: 'Global Offices', icon: <Globe size={24} /> },
    { number: '99.9%', label: 'Success Rate', icon: <Shield size={24} /> }
  ];

  const pillars = [
    {
      title: 'Proactive Intelligence',
      description: 'We solve problems before you know they exist',
      details: 'Our monitoring systems track weather patterns, airline schedules, and global events to anticipate disruptions. When your flight gets cancelled, we\'ve already secured your alternative.',
      icon: <Zap size={40} />,
      gradient: 'from-navy/15 to-navy/5',
      border: 'border-navy/30',
      hoverBorder: 'hover:border-navy/50'
    },
    {
      title: 'Global Mastery',
      description: 'Local expertise in 50+ cities, one dedicated contact',
      details: 'Whether you\'re landing in Lagos or lunching in London, our local teams know the shortcuts, the best restaurants, and the right people to call.',
      icon: <Globe size={40} />,
      gradient: 'from-gold/10 to-gold/5',
      border: 'border-gold/30',
      hoverBorder: 'hover:border-gold/50'
    },
    {
      title: 'Exclusive Access',
      description: 'VIP treatment and upgrades unavailable to the public',
      details: 'Direct airline partnerships, luxury hotel relationships, and diplomatic protocols give you access to experiences money alone can\'t buy.',
      icon: <Crown size={40} />,
      gradient: 'from-charcoal/10 to-charcoal/5',
      border: 'border-charcoal/30',
      hoverBorder: 'hover:border-charcoal/50'
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy via-navy/95 to-navy/90">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            <span className="text-gold text-sm font-light tracking-wide">OUR STORY</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-light text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Built by Travelers,
            <span className="text-gold block font-extralight italic">for Leaders</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Because scrambling with travel logistics wastes your valuable time
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2 bg-cream/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-cream/20">
                <div className="text-gold">{stat.icon}</div>
                <div>
                  <div className="text-gold font-medium">{stat.number}</div>
                  <div className="text-cream/80 text-sm font-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-navy mb-8 leading-tight">
                Born from Frustration, 
                <span className="block text-gold italic font-extralight">Perfected Through Experience</span>
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light">
                <p>
                  In 2018, our founder missed a critical $2M merger meeting due to a 'luxury' travel agency's incompetence. That disaster sparked Haske Global Travel.
                </p>
                <p>
                  Today, we prevent those disasters for 500+ executives worldwide. Not through promises, but through obsessive preparation and genuine global presence.
                </p>
                <p className="font-medium text-navy">
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
              {/* Elegant Stats Display */}
              <div className="bg-gradient-to-br from-white via-cream/30 to-white rounded-3xl p-8 shadow-2xl border border-gold/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 rounded-3xl blur-xl opacity-50" />
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award size={32} className="text-gold" />
                    </div>
                    <h3 className="text-2xl font-medium text-navy">Our Impact</h3>
                    <p className="text-charcoal/60 text-sm font-light">Since 2018</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-navy/20 to-navy/10 rounded-xl border-2 border-navy/40">
                      <div className="text-3xl font-light text-navy mb-2">500+</div>
                      <div className="text-sm text-charcoal/70 font-light">Executives Served</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl border-2 border-gold/50">
                      <div className="text-3xl font-light text-navy mb-2">15K+</div>
                      <div className="text-sm text-charcoal/70 font-light">Hours Saved</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-charcoal/15 to-charcoal/5 rounded-xl border-2 border-charcoal/40">
                      <div className="text-3xl font-light text-navy mb-2">50+</div>
                      <div className="text-sm text-charcoal/70 font-light">Cities Covered</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-navy/15 to-navy/8 rounded-xl border-2 border-navy/35">
                      <div className="text-3xl font-light text-navy mb-2">99.9%</div>
                      <div className="text-sm text-charcoal/70 font-light">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-black to-navy relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold" />
              <Crown size={32} className="text-gold" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
              Why We're 
              <span className="block text-gold italic font-extralight">Different</span>
            </h2>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto font-light">
              Three fundamental principles that separate us from traditional travel agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br ${pillar.gradient} backdrop-blur-sm rounded-2xl p-8 border ${pillar.border} ${pillar.hoverBorder} transition-all duration-700`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                  <h3 className="text-2xl font-medium text-cream mb-4 group-hover:text-gold transition-colors duration-500">{pillar.title}</h3>
                  <p className="text-lg text-cream/80 mb-6 font-light">{pillar.description}</p>
                  <p className="text-cream/70 leading-relaxed font-light text-sm">{pillar.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials Section */}
      <section className="py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
              Trust & <span className="text-gold italic font-extralight">Credentials</span>
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto font-light">
              Global presence with local expertise, backed by industry certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Global Offices */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10"
            >
              <h3 className="text-2xl font-medium text-navy mb-6 flex items-center">
                <Globe size={28} className="text-gold mr-3" />
                Global Presence
              </h3>
              <div className="space-y-6">
                {[
                  { city: 'London', region: 'Europe & UK', description: 'Headquarters', flag: '🇬🇧' },
                  { city: 'Dubai', region: 'Middle East & Asia', description: 'Regional Hub', flag: '🇦🇪' },
                  { city: 'Accra', region: 'West Africa', description: 'Local Expertise', flag: '🇬🇭' }
                ].map((office, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cream/30 to-transparent rounded-xl border border-cream/20">
                    <div className="text-2xl">{office.flag}</div>
                    <div className="flex-1">
                      <div className="font-medium text-navy">{office.city}</div>
                      <div className="text-charcoal/70 text-sm font-light">{office.region}</div>
                      <div className="text-charcoal/50 text-xs font-light">{office.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Credentials & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold/10"
            >
              <h3 className="text-2xl font-medium text-navy mb-6 flex items-center">
                <Shield size={28} className="text-gold mr-3" />
                Certifications
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  'IATA Certified Agency',
                  'ISO 27001 Security Standard',
                  'Virtuoso Luxury Network',
                  'PCI DSS Compliant',
                  '256-bit Data Encryption'
                ].map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cream/20 to-transparent rounded-lg border border-cream/20">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-charcoal/80 font-light">{credential}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-navy/10 to-navy/5 rounded-xl border border-navy/10">
                <div className="text-center">
                  <div className="text-3xl font-light text-navy mb-2">150+</div>
                  <div className="text-sm text-charcoal/70 uppercase tracking-wide font-light">Years Combined Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;