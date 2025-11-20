import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Phone, Crown, Gem, Award, Star, Zap, Globe, ChevronDown, ShieldCheck, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Parallax effect for hero
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Stats counter animation
  const StatsCounter = ({ end, label, suffix = '' }: { end: number; label: string; suffix?: string }) => {
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
        }, 30);
        return () => clearInterval(timer);
      }
    }, [isInView, end]);

    return (
      <div ref={ref} className="text-center group">
        <div className="text-4xl md:text-5xl font-serif text-gold mb-2 group-hover:scale-110 transition-transform duration-500">
          {count}{suffix}
        </div>
        <div className="text-cream/60 text-xs md:text-sm uppercase tracking-[0.2em] font-sans">{label}</div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden bg-navy">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/haske-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 border border-gold/30 rounded-full bg-black/20 backdrop-blur-sm text-gold text-xs tracking-[0.3em] uppercase font-sans">
              Global Travel Management
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Curated Travel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic">
              Meets Precision
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-cream/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed font-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Bespoke orchestration for discerning leaders who demand nothing less than perfection.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gold text-navy font-sans font-medium tracking-widest uppercase overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Begin Journey <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </motion.button>
            
            <a
              href="tel:+442081911882"
              className="hidden sm:flex items-center gap-3 text-cream/80 hover:text-gold transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                <Phone size={16} />
              </div>
              <span className="font-sans text-sm tracking-widest uppercase">Private Line</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* The Reality (Problem) - Dark & Sleek */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-charcoal/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-cream mb-8 leading-tight">
                Your Time is <br />
                <span className="text-gold italic">The Ultimate Luxury</span>
              </h2>
              <div className="space-y-8 text-lg text-cream/70 font-light font-sans">
                <p>
                  In the world of high-stakes business, every minute spent on logistics is a minute lost on strategy. You didn't build an empire to negotiate with airline call centers.
                </p>
                <p className="pl-6 border-l-2 border-gold text-cream italic">
                  "The cost of travel isn't just the ticket price. It's the opportunity cost of your attention."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm">
                <h3 className="text-2xl font-serif text-gold mb-8">The Hidden Cost of DIY</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Productivity Loss', value: '$8,500/mo', icon: Clock },
                    { label: 'Missed Opportunities', value: 'Incalculable', icon: Zap },
                    { label: 'Decision Fatigue', value: 'Critical', icon: ShieldCheck },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <item.icon className="text-gold/60" size={20} />
                        <span className="text-cream font-sans">{item.label}</span>
                      </div>
                      <span className="text-gold font-serif text-xl">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Horizontal Scroll / Cards */}
      <section className="py-32 bg-cream text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-sans tracking-[0.3em] uppercase block mb-4">Beyond First Class</span>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-6">
              Excellence as Standard
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proactive Intelligence',
                desc: 'We anticipate disruptions before they happen, rerouting you while you sleep.',
                icon: Zap
              },
              {
                title: 'Global Mastery',
                desc: 'Local expertise in 50+ cities with a single, dedicated point of contact.',
                icon: Globe
              },
              {
                title: 'Exclusive Access',
                desc: 'VIP upgrades and amenities unavailable to the general public.',
                icon: Crown
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-10 bg-white border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h3 className="text-2xl font-serif text-navy mb-4">{feature.title}</h3>
                <p className="text-charcoal/70 font-sans font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-navy/10 pt-16">
            <StatsCounter end={500} label="Elite Clients" suffix="+" />
            <StatsCounter end={50} label="Countries" suffix="+" />
            <StatsCounter end={99} label="Success Rate" suffix="%" />
            <StatsCounter end={24} label="Support" suffix="/7" />
          </div>
        </div>
      </section>

      {/* Social Proof - Editorial Style */}
      <section className="py-32 bg-navy text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-12">
                Trusted by <span className="text-gold italic">Industry Leaders</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    quote: "Haske Global doesn't just manage travel—they curate experiences that enhance my global influence.",
                    author: "Alexandra Chen",
                    role: "CEO, TechForward Ventures"
                  },
                  {
                    quote: "The sophistication and attention to detail is unmatched. They understand that my time is measured in millions.",
                    author: "Marcus Rodriguez",
                    role: "Managing Partner, Global Capital"
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-gold/30">
                    <p className="text-xl md:text-2xl font-serif italic text-cream/90 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="text-gold font-sans tracking-wide uppercase text-sm">{testimonial.author}</div>
                      <div className="text-cream/50 text-sm font-light">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-[600px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gold/20 transform rotate-3" />
              <img 
                src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury Travel" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-32 bg-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Crown size={40} className="text-gold mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-6">
              Begin Your Journey
            </h2>
            <p className="text-lg text-charcoal/60 font-sans font-light">
              Join the exclusive circle of leaders who have transcended ordinary travel.
            </p>
          </motion.div>
          
          <div className="bg-white p-8 md:p-12 shadow-2xl shadow-navy/5 border border-navy/5">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;