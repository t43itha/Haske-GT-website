import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Phone, Crown, Gem, Award, Star, Zap, Globe, ChevronDown } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Parallax effect for hero
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Stats counter animation
  const StatsCounter = ({ end, label, suffix = '' }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        const timer = setInterval(() => {
          setCount(prev => {
            if (prev < end) {
              return Math.min(prev + Math.ceil(end / 100), end);
            }
            clearInterval(timer);
            return end;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isInView, end]);

    return (
      <div ref={ref} className="text-center">
        <div className="text-5xl font-light text-gold mb-3 tracking-wide">
          {count}{suffix}
        </div>
        <div className="text-cream/70 text-sm uppercase tracking-widest">{label}</div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 brightness-110 contrast-110 saturate-110"
          >
            <source src="/haske-hero.mp4" type="video/mp4" />
          </video>
          
          {/* Lighter overlay gradients for better text readability while preserving video vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/40 via-navy/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-navy/10" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Luxury Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gold/15 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Crown size={16} className="text-gold" />
            <span className="text-gold text-sm font-light tracking-wide">EXCLUSIVE TRAVEL SERVICES</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-light text-cream mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Curated Travel
            <span className="block text-gold font-extralight italic">Meets Precision</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Bespoke travel orchestration for discerning leaders who demand nothing less than perfection
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-gold via-gold to-gold/90 text-black px-10 py-5 rounded-none font-medium text-lg tracking-wide uppercase overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold/80 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center space-x-3">
                <span>Begin Your Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
            
            {/* Private Line CTA - Hidden on Mobile */}
            <a
              href="tel:+442081911882"
              className="hidden sm:flex items-center space-x-3 text-cream/90 hover:text-gold transition-colors duration-500 group"
            >
              <div className="w-12 h-12 border border-cream/30 rounded-full flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <div className="text-sm text-cream/60 uppercase tracking-wide">Private Line</div>
                <div className="font-light">+44 208 191 1882</div>
              </div>
            </a>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-2 h-2 bg-gold rounded-full opacity-60"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-1 h-1 bg-cream rounded-full opacity-40"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        {/* Ultra Compact Down Arrow Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center space-y-0.5">
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            >
              <ChevronDown size={16} className="text-gold/80" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            >
              <ChevronDown size={16} className="text-gold/60" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              <ChevronDown size={16} className="text-gold/40" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Problem - Refined with Brand Colors */}
      <section className="py-24 bg-gradient-to-b from-cream to-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-navy/5 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="text-navy/70 text-sm font-medium tracking-wide">THE REALITY</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-light text-navy mb-6 leading-tight">
                  Your Time is Worth
                  <span className="block text-gold italic font-extralight">More Than This</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed font-light">
                <p>
                  Every minute wrestling with airline hold music is a minute stolen from strategy that moves markets.
                </p>
                <p className="font-medium text-navy">
                  You didn't build an empire to spend it managing travel logistics.
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
              {/* Sophisticated Cost Calculator with Brand Colors */}
              <div className="relative bg-gradient-to-br from-white via-cream/30 to-white rounded-3xl p-8 shadow-2xl border border-gold/20">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 rounded-3xl blur-xl opacity-50" />
                <div className="relative">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-2xl flex items-center justify-center">
                      <Award size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy">Hidden Costs of DIY Travel</h3>
                      <p className="text-charcoal/60 text-sm">Per executive, per month</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { issue: 'Lost productivity hours', cost: '$8,500', impact: 'Critical', bgColor: 'from-navy/10 to-navy/5', borderColor: 'border-navy/20' },
                      { issue: 'Emergency rebookings', cost: '$3,200', impact: 'High', bgColor: 'from-gold/10 to-gold/5', borderColor: 'border-gold/30' },
                      { issue: 'Missed opportunities', cost: '$3,300+', impact: 'Critical', bgColor: 'from-cream/20 to-cream/10', borderColor: 'border-cream/40' },
                      { issue: 'Stress & decision fatigue', cost: 'Immeasurable', impact: 'Personal', bgColor: 'from-charcoal/5 to-charcoal/2', borderColor: 'border-charcoal/20' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`group flex justify-between items-center py-4 px-6 bg-gradient-to-r ${item.bgColor} rounded-xl border ${item.borderColor} hover:border-gold/40 transition-all duration-500`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex-1">
                          <span className="text-charcoal font-medium">{item.issue}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className={`w-2 h-2 rounded-full ${
                              item.impact === 'Critical' ? 'bg-navy' :
                              item.impact === 'High' ? 'bg-gold' :
                              item.impact === 'Medium' ? 'bg-cream' : 'bg-charcoal'
                            }`} />
                            <span className="text-xs text-charcoal/60 uppercase tracking-wide">{item.impact} Impact</span>
                          </div>
                        </div>
                        <span className={`font-bold text-lg ${
                          item.cost === 'Immeasurable' ? 'text-charcoal' : 'text-navy'
                        }`}>
                          {item.cost}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-navy/10 to-gold/10 rounded-2xl border border-gold/20">
                    <div className="text-center">
                      <div className="text-3xl font-light text-navy mb-2">$15,000+</div>
                      <div className="text-sm text-charcoal/70 uppercase tracking-wide">Monthly Hidden Costs</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond First Class - Into Excellence */}
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
              <Gem size={32} className="text-gold" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
              Beyond First Class—
              <span className="block text-gold italic font-extralight">Into Excellence</span>
            </h2>
            
            <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed font-light">
              Where precision meets luxury, and every detail serves your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap size={32} />, 
                title: 'Proactive Intelligence', 
                desc: 'We solve problems before you know they exist',
                bgGradient: 'from-navy/40 to-navy/20',
                borderColor: 'border-gold/20',
                hoverBorder: 'hover:border-gold/40'
              },
              { 
                icon: <Globe size={32} />, 
                title: 'Global Mastery', 
                desc: 'Local expertise in 50+ cities, one dedicated contact',
                bgGradient: 'from-gold/10 to-gold/5',
                borderColor: 'border-gold/30',
                hoverBorder: 'hover:border-gold/60'
              },
              { 
                icon: <Crown size={32} />, 
                title: 'Exclusive Access', 
                desc: 'VIP treatment and upgrades unavailable to the public',
                bgGradient: 'from-cream/10 to-cream/5',
                borderColor: 'border-cream/20',
                hoverBorder: 'hover:border-cream/40'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-2xl p-8 border ${feature.borderColor} ${feature.hoverBorder} transition-all duration-700`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                <div className="relative z-10">
                  <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-cream mb-4 group-hover:text-gold transition-colors duration-500">{feature.title}</h3>
                  <p className="text-cream/70 leading-relaxed font-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <StatsCounter end={500} label="Elite Executives" suffix="+" />
            <StatsCounter end={50} label="Countries Served" suffix="+" />
            <StatsCounter end={99.9} label="Success Rate" suffix="%" />
            <StatsCounter end={24} label="Hour Availability" suffix="/7" />
          </motion.div>
        </div>
      </section>

      {/* Social Proof - Refined */}
      <section className="py-24 bg-gradient-to-br from-cream to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
              <Star size={24} className="text-gold" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
            </div>
            <h2 className="text-4xl font-light text-navy mb-6">
              Trusted by <span className="text-gold italic">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                quote: "Haske Global doesn't just manage travel—they curate experiences that enhance my global influence.",
                author: "Alexandra Chen",
                title: "CEO, TechForward Ventures",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                quote: "The sophistication and attention to detail is unmatched. They understand that my time is measured in millions.",
                author: "Marcus Rodriguez",
                title: "Managing Partner, Global Capital",
                image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl text-gold/20 mb-4 font-serif leading-none">"</div>
                <p className="text-lg text-charcoal/80 mb-6 leading-relaxed font-light italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-gold/30"
                       style={{ backgroundImage: `url(${testimonial.image})` }} />
                  <div>
                    <div className="text-gold font-medium">{testimonial.author}</div>
                    <div className="text-charcoal/60 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-black to-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-5xl font-light text-cream mb-8 leading-tight">
              Begin Your Elevated Journey
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto font-light">
              Join the exclusive circle of leaders who have transcended ordinary travel
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Homepage;