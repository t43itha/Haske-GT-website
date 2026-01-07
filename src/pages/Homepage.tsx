import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Crown, Zap, Globe, ChevronDown, Lightbulb, Shield, PlaneTakeoff } from 'lucide-react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import ContactForm from '../components/ContactForm';
import SectionBadge from '../components/SectionBadge';
import StatCard from '../components/StatCard';
import ProcessStep from '../components/ProcessStep';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';
import TrustLogos from '../components/TrustLogos';
import CallbackRequest from '../components/CallbackRequest';

const Homepage = () => {
  usePageMeta({
    title: 'Luxury Corporate Travel Management',
    description: 'Haske Global Travel - Premium corporate travel management for executives. 24/7 concierge, private jets, bespoke itineraries. Experience travel beyond first class.'
  });

  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Show image first, switch when video plays

  // Force video autoplay on mount (helps with mobile browsers)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly call play() for browsers that block autoPlay attribute
    video.play().catch(() => {
      // Autoplay was prevented, fallback image stays visible
    });
  }, []);

  // Parallax effect for hero
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const testimonials = [
    {
      quote: "Haske Global doesn't just manage travel—they curate experiences that enhance my global influence.",
      author: "Alexandra Chen",
      role: "CEO",
      company: "TechForward Ventures",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The sophistication and attention to detail is unmatched. They understand that my time is measured in millions.",
      author: "Marcus Rodriguez",
      role: "Managing Partner",
      company: "Global Capital",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Finally, a travel partner who anticipates my needs before I even articulate them.",
      author: "Sarah Williams",
      role: "Founder",
      company: "Meridian Holdings",
      image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description: "We begin by understanding your unique travel patterns, preferences, and business objectives.",
      icon: Lightbulb
    },
    {
      number: "02",
      title: "Design",
      description: "Our specialists craft bespoke itineraries that optimize every moment of your journey.",
      icon: Crown
    },
    {
      number: "03",
      title: "Deliver",
      description: "Experience seamless execution with 24/7 support and proactive problem resolution.",
      icon: Zap
    },
    {
      number: "04",
      title: "Evolve",
      description: "Continuous refinement based on your feedback ensures ever-improving service.",
      icon: Shield
    }
  ];

  const trustLogos = [
    { name: "Forbes 500" },
    { name: "Tech Leaders" },
    { name: "Global Finance" },
    { name: "Executive Circle" },
    { name: "World Travel" }
  ];

  return (
    <div className="overflow-x-hidden bg-navy">
      {/* Hero Section - Split Layout */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden pb-20 lg:pb-0">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity }}
        >
          {/* Fallback image - shows when video doesn't autoplay */}
          <img
            src="/hero-poster.png"
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isVideoPlaying ? 'opacity-0 pointer-events-none' : 'opacity-80'}`}
          />
          {/* Video - fades in only when actually playing */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onPlaying={() => setIsVideoPlaying(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isVideoPlaying ? 'opacity-80' : 'opacity-0 pointer-events-none'}`}
          >
            <source src="/haske-hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-navy/30" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            {/* Tagline with horizontal line */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">
                Luxury Corporate Travel Management
              </span>
            </motion.div>

            {/* Headline - Mixed styling with SEO prefix */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="sr-only">Luxury Corporate Travel Management - </span>
              <span className="text-cream">Beyond</span>
              <br />
              <span className="text-gold italic">First Class</span>
              <br />
              <span className="text-cream">Expectations.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-cream/70 mb-10 font-light leading-relaxed font-sans max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your time is too valuable for travel logistics. We handle the complexity so you arrive ready to lead.
            </motion.p>

            {/* CTA - Refined luxury aesthetic */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary CTA - Elegant outlined style */}
              <motion.button
                className="group flex items-center gap-3 px-10 py-4 border border-gold/80 text-gold font-sans font-light text-xs tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-500"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Secondary CTA - Hidden on mobile */}
              <a
                href="https://wa.me/+447340801274"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex group items-center justify-center gap-3 px-8 py-4 text-cream/60 font-sans font-light text-xs tracking-[0.2em] uppercase hover:text-gold transition-all duration-500"
              >
                <span>Speak with Concierge</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* IATA Badge - Bottom right */}
        <motion.div
          className="absolute bottom-24 lg:bottom-10 right-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="flex flex-col items-end opacity-80 mix-blend-overlay">
            <div className="flex items-end gap-2">
              <PlaneTakeoff className="w-7 h-7 text-white mb-0.5" strokeWidth={1.5} />
              <div className="flex flex-col leading-none text-white font-bold">
                <span>IATA</span>
                <span className="text-[0.5rem] font-light tracking-wider uppercase">Accredited Agent</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 lg:bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Who We Are - Intro Statement */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionBadge variant="light">Who We Are</SectionBadge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy leading-snug text-center"
          >
            Haske Global Travel is a{' '}
            <span className="text-gold italic">results-driven</span>{' '}
            travel consultancy{' '}
            <span className="text-gold italic">helping</span>{' '}
            executives{' '}
            <span className="text-gold italic">navigate</span>{' '}
            complexity,{' '}
            <span className="text-gold italic">reclaim</span>{' '}
            their time, and{' '}
            <span className="text-gold italic">achieve</span>{' '}
            seamless global mobility.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCard value="500" suffix="+" label="Elite Clients" subtitle="Including Fortune 500 leaders" delay={0} />
            <StatCard value="50" suffix="+" label="Countries" subtitle="Seamless global coverage" delay={0.1} />
            <StatCard value="99" suffix="%" label="Success Rate" subtitle="On-time delivery guaranteed" delay={0.2} />
            <StatCard value="24" suffix="/7" label="Support" subtitle="Dedicated concierge team" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge>Our Expertise</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mt-6 mb-4">
              Excellence as <span className="text-gold italic">Standard</span>
            </h2>
            <p className="text-cream/60 font-sans max-w-2xl mx-auto">
              Every journey is meticulously orchestrated to exceed expectations.
            </p>
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
                className="group p-8 md:p-10 bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 font-sans font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold hover:text-white font-sans text-sm tracking-wider uppercase transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform"
        titleAccent="Your Travel?"
        description="Schedule a consultation and discover how we can streamline your global mobility."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge>Testimonials</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mt-6">
              What Our <span className="text-gold italic">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
                delay={idx * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge variant="light">Our Approach</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mt-6">
              A <span className="text-gold italic">Proven</span> Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <ProcessStep
                key={idx}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={idx * 0.15}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <TrustLogos
        title="Trusted By Industry Leaders"
        logos={trustLogos}
        variant="dark"
      />

      {/* Quick Callback Strip */}
      <section className="py-12 bg-navy border-y border-white/5">
        <div className="max-w-xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-cream/80 font-sans text-sm mb-4">
              Need immediate assistance? Leave your number and we'll call you back.
            </p>
            <CallbackRequest variant="dark" title="" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 md:py-32 bg-cream relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge variant="light">Get Started</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mt-6 mb-4">
              Begin Your <span className="text-gold italic">Journey</span>
            </h2>
            <p className="text-charcoal/60 font-sans max-w-xl mx-auto">
              Join the exclusive circle of leaders who have transcended ordinary travel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-xl shadow-navy/5 border border-gray-100"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
