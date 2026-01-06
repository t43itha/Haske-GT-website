import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Palmtree,
  Heart,
  ArrowRight,
  Lightbulb,
  PenTool,
  Zap,
  TrendingUp,
  Plane,
  Map,
  Headphones
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SectionBadge from '../components/SectionBadge';
import ProcessStep from '../components/ProcessStep';
import CTABanner from '../components/CTABanner';

// Featured Service Card Component
const FeaturedServiceCard = ({
  image,
  icon: Icon,
  title,
  description,
  cta,
  index
}: {
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  cta: string;
  index: number;
}) => (
  <motion.div
    className="group relative h-[450px] md:h-[500px] overflow-hidden cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-2 border border-white/20 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-cream text-2xl font-serif">{title}</h3>
      <p className="text-cream/70 text-sm md:text-base font-sans font-light leading-relaxed line-clamp-3 group-hover:text-cream transition-colors">
        {description}
      </p>
      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2">
        <span className="text-gold font-sans font-semibold text-sm uppercase tracking-wider">{cta}</span>
        <ArrowRight className="w-4 h-4 text-gold" />
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const allServices = [
    {
      icon: Plane,
      title: 'Private Jet Charters',
      description: 'Bypass the terminals. Access a global fleet of mid-to-heavy jets tailored for executive efficiency and privacy.',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'View Fleet'
    },
    {
      icon: Map,
      title: 'Bespoke Itineraries',
      description: 'From door-to-door transfers to exclusive hotel partnerships, every second of your journey is meticulously planned.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Explore Options'
    },
    {
      icon: Headphones,
      title: '24/7 Global Concierge',
      description: 'Unparalleled access to lifestyle management and support, ensuring your business trip feels like a seamless luxury experience.',
      image: 'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Contact Team'
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Seamless business travel orchestration for leaders who demand excellence. Every detail handled with military precision.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Learn More'
    },
    {
      icon: Users,
      title: 'Event Coordination',
      description: 'Board meetings to product launches—handled with precision that rivals the finest event planners.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Plan Event'
    },
    {
      icon: Palmtree,
      title: 'Bespoke Leisure',
      description: 'Exclusive experiences crafted for discerning travelers who seek the extraordinary.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Discover More'
    },
    {
      icon: Heart,
      title: 'Wellness Retreats',
      description: 'Curated wellness experiences designed for peak performance leaders seeking rejuvenation.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      cta: 'Find Retreats'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin by understanding your unique travel DNA, preferences, and business objectives.',
      icon: Lightbulb
    },
    {
      number: '02',
      title: 'Curation',
      description: 'Our specialists craft bespoke itineraries tailored to your executive profile.',
      icon: PenTool
    },
    {
      number: '03',
      title: 'Activation',
      description: 'Experience seamless execution with 24/7 dedicated support at your fingertips.',
      icon: Zap
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous refinement based on your feedback ensures ever-improving service.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <SectionBadge>Excellence in Motion</SectionBadge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated Corporate <span className="text-gold italic">Excellence</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-cream/60 max-w-2xl mx-auto font-light font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Elevate your business travel with a suite of services designed for privacy, efficiency, and absolute comfort.
          </motion.p>
        </div>
      </section>

      {/* All Services - Image Cards Grid */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {allServices.slice(0, 3).map((service, index) => (
              <FeaturedServiceCard
                key={service.title}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                cta={service.cta}
                index={index}
              />
            ))}
          </div>

          {/* Second Row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {allServices.slice(3).map((service, index) => (
              <FeaturedServiceCard
                key={service.title}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                cta={service.cta}
                index={index + 3}
              />
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="flex justify-center mt-16">
            <div className="h-px w-2/3 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge>Our Process</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mt-6">
              From Chaos to <span className="text-gold italic">Choreography</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.15}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Experience"
        titleAccent="Effortless Travel?"
        description="Let us handle the complexity while you focus on what matters most."
        buttonText="Start Your Journey"
        buttonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge variant="light">Why Choose Us</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mt-6">
              Why Leaders Choose <span className="text-gold italic">Haske Global</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exclusive Access',
                desc: 'VIP treatment and upgrades unavailable to the public. Our relationships open doors others cannot.'
              },
              {
                title: 'Proactive Care',
                desc: 'Problems solved before they impact your schedule. We anticipate disruptions and act preemptively.'
              },
              {
                title: 'Global Expertise',
                desc: 'Local knowledge in 50+ cities worldwide. One point of contact, limitless possibilities.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-serif text-navy mb-4">{benefit.title}</h4>
                <p className="text-charcoal/60 font-sans font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 md:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge>Get Started</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mt-6 mb-4">
              Ready to <span className="text-gold italic">Elevate</span> Your Travel?
            </h2>
            <p className="text-cream/60 font-sans max-w-xl mx-auto">
              Let's discuss your bespoke travel requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12"
          >
            <ContactForm title="Request Your Custom Solution" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
