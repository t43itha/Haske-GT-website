import { motion } from 'framer-motion';
import {
  Globe,
  Clock,
  Key,
  Plane,
  ArrowRight,
  Phone,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionBadge from '../components/SectionBadge';
import usePageMeta from '../hooks/usePageMeta';

const About = () => {
  usePageMeta({
    title: 'About Our Dubai Travel Company',
    description: 'Haske Global Travel & Tourism L.L.C S.O.C is a Dubai-licensed, IATA-accredited tour operator serving international clients.'
  });

  const stats = [
    { value: '50+', label: 'Global Destinations' },
    { value: '500+', label: 'Corporate Clients' },
    { value: '15+', label: 'Years of Excellence' }
  ];

  const coreValues = [
    {
      icon: Key,
      title: 'Premium Access',
      description: 'Unlocking exclusive entry to the world\'s most elite lounges, private terminals, and services that are simply inaccessible to the public.'
    },
    {
      icon: Clock,
      title: '24/7 Concierge',
      description: 'Round-the-clock dedicated support. Whether it\'s a last-minute flight change or a dinner reservation in Tokyo, we are always on standby.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'A far-reaching web of partners ensuring luxury standards are met worldwide. No matter where you land, you are in Haske territory.'
    }
  ];

  const offices = [
    {
      city: 'Dubai',
      region: 'Middle East & Asia',
      description: 'Registered Office',
      flag: '🇦🇪',
      phone: '+971 55 573 4881',
      address: 'Office M07, Al Mulla-7 Building, Naif, Dubai, UAE',
      hours: '24/7 Concierge Available'
    },
    {
      city: 'London',
      region: 'Europe & UK',
      description: 'UK Office',
      flag: '🇬🇧',
      phone: '+44 208 191 1882',
      address: 'Suite 130, Lewisham Tower House, 67-71 Lewisham High Street, SE13 5JX',
      hours: 'Mon-Fri: 7AM - 9PM GMT'
    }
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="text-gold text-sm font-sans font-semibold tracking-[0.2em] uppercase">
                  The Pinnacle of Travel
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight">
                  <span className="sr-only">About Haske Global Travel - </span>
                  Excellence <br />
                  <span className="text-gold italic">in Motion</span>
                </h1>
                <p className="text-cream/70 text-lg font-sans font-light leading-relaxed max-w-xl">
                  Haske Global Travel & Tourism L.L.C S.O.C is a Dubai-licensed tour operator serving international clients with tailored travel and concierge services.
                </p>
                <p className="text-gold text-sm font-sans tracking-wider uppercase">
                  DET Licence No. 1485567 · IATA Accredited
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="flex items-center justify-center h-12 px-8 bg-gold text-navy font-sans font-semibold tracking-wider uppercase hover:bg-cream transition-colors duration-300"
                >
                  Discover Our Mission
                </Link>
                <Link
                  to="/destinations"
                  className="flex items-center justify-center h-12 px-8 border border-white/20 text-cream font-sans tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
                >
                  View Destinations
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-10" />
                <img
                  src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury airplane wing at sunset"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 lg:bottom-10 lg:-left-12 bg-navy/80 backdrop-blur-md border border-white/10 p-6 z-20 max-w-[200px] hidden md:flex flex-col gap-2">
                <Plane className="w-8 h-8 text-gold" strokeWidth={1.5} />
                <p className="text-cream font-serif text-2xl font-bold">5,000+</p>
                <p className="text-cream/60 text-sm font-sans">Successful flights coordinated globally</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2 px-4 pt-8 md:pt-0 first:pt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gold text-4xl font-serif font-bold tracking-tight">{stat.value}</p>
                <p className="text-cream/70 text-sm font-sans font-medium uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Group */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Luxury private jet interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-video overflow-hidden border border-white/10 shadow-2xl hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Executive chauffeur service"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8 order-1 lg:order-2"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-cream leading-tight mb-4">
                  Refining the Art of <br />
                  <span className="text-gold italic">Corporate Travel</span>
                </h2>
                <div className="h-1 w-20 bg-gold mb-6" />
                <p className="text-cream/80 text-lg font-sans font-light leading-relaxed mb-6">
                  Based in Dubai, we arrange corporate travel, private journeys, tours, transfers and concierge support for clients travelling in the UAE and worldwide.
                </p>
                <p className="text-cream/60 text-base font-sans font-light leading-relaxed">
                  Our team of dedicated specialists works tirelessly to ensure that every mile traveled is a testament to comfort and efficiency. From private aviation charter to secured ground transport, we handle the logistics so you can focus on the business at hand.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-navy flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">CEO</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-navy flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">VP</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-navy flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">DIR</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-cream font-sans font-semibold text-sm">Trusted by Industry Leaders</span>
                  <Link to="/contact" className="text-gold text-xs hover:underline">Join our network</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values & Global Presence - Combined Section */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge variant="light">Why Haske</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-serif text-navy mt-6 mb-4">
              Global Presence, <span className="text-gold italic">Local Expertise</span>
            </h2>
            <p className="text-charcoal/60 text-lg font-sans font-light">
              Built on a foundation of trust, exclusivity, and impeccable service. We don't just book travel; we engineer experiences.
            </p>
          </motion.div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-navy p-8 hover:bg-navy/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  <value.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-cream mb-3">{value.title}</h3>
                <p className="text-cream/70 text-sm font-sans font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/30" />
            <span className="text-gold text-xs font-sans font-semibold tracking-[0.2em] uppercase">Our Offices</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col p-8 bg-white border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{office.flag}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-navy">{office.city}</h3>
                    <div className="text-gold text-xs font-sans uppercase tracking-wider">{office.description}</div>
                  </div>
                </div>

                <div className="space-y-3 mt-2">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-charcoal/70 hover:text-gold transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm font-sans">{office.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-charcoal/60">
                    <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-sans font-light leading-relaxed">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal/60">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm font-sans font-light">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-cream leading-tight">
              Ready to elevate your <br />
              <span className="text-gold italic">corporate travel?</span>
            </h2>
            <p className="text-cream/70 text-lg font-sans font-light max-w-2xl mx-auto">
              Join the exclusive network of Haske travelers today. Experience the difference that true dedication makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center min-w-[160px] h-14 px-8 bg-gold hover:bg-cream text-navy font-sans font-semibold tracking-wider uppercase transition-colors duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              >
                Inquire Now
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 min-w-[160px] h-14 px-8 border border-white/20 text-cream font-sans tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
