import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionBadge from '../components/SectionBadge';

interface Destination {
  id: string;
  category: string;
  location: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  size?: 'large' | 'wide' | 'normal';
}

// Reusable card component for standard destinations
const DestinationCard = ({ destination, index }: { destination: Destination; index: number }) => (
  <motion.div
    className="group relative overflow-hidden cursor-pointer h-[300px] md:h-[350px]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{ backgroundImage: `url('${destination.image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
      <div className="bg-navy/60 backdrop-blur-md border border-white/10 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-gold text-xs font-sans font-medium uppercase tracking-wider block mb-2">
          {destination.category} • {destination.location}
        </span>
        <h3 className="font-serif text-cream text-xl mb-2">
          {destination.title}
        </h3>
        <p className="text-cream/60 text-sm font-sans font-light leading-relaxed line-clamp-2">
          {destination.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const Destinations = () => {

  const destinations: Destination[] = [
    {
      id: 'dubai',
      category: 'Urban',
      location: 'UAE',
      title: 'Dubai Executive Suites',
      description: 'Experience the pinnacle of desert luxury for your next board meeting. High-rise privacy meets world-class hospitality.',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true,
      size: 'large',
    },
    {
      id: 'kyoto',
      category: 'Retreats',
      location: 'Japan',
      title: 'Kyoto Zen Retreats',
      description: 'Find focus and tranquility in our private heritage properties designed for deep work.',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'normal',
    },
    {
      id: 'monaco',
      category: 'Coastal',
      location: 'Monaco',
      title: 'Monaco Yacht Charters',
      description: 'Impress clients against the backdrop of the Mediterranean on a private superyacht.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'normal',
    },
    {
      id: 'newyork',
      category: 'Urban',
      location: 'USA',
      title: 'New York Sky Lofts',
      description: 'Corporate agility in the heart of Manhattan. Equipped with state-of-the-art conferencing tech.',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      size: 'wide',
    },
    {
      id: 'swiss',
      category: 'Retreats',
      location: 'Switzerland',
      title: 'Alpine Boardrooms',
      description: 'High-altitude thinking in the Swiss Alps. Seclusion guaranteed.',
      image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'normal',
    },
    {
      id: 'maldives',
      category: 'Coastal',
      location: 'Maldives',
      title: 'Maldives Overwater Villas',
      description: 'Crystal waters and private bungalows for your executive escape. Ultimate privacy meets paradise.',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
      size: 'normal',
    },
  ];

  return (
    <div className="bg-navy min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <SectionBadge>Global Portfolio</SectionBadge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Curated <span className="text-gold italic">Horizons</span>
          </motion.h1>

          <motion.p
            className="text-lg text-cream/60 max-w-2xl mx-auto font-light font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where business meets leisure. Discover our hand-picked selection of exclusive
            corporate retreat destinations designed for productivity and rejuvenation.
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Bento Grid Layout - Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Dubai - Large Featured (spans 2 cols) */}
            <motion.div
              className="group relative overflow-hidden cursor-pointer lg:col-span-2 h-[400px] md:h-[500px] lg:h-[720px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${destinations[0].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10">
                <div className="bg-navy/60 backdrop-blur-md border border-white/10 p-6 md:p-8 max-w-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-xs font-sans font-medium uppercase tracking-wider block mb-3">
                    {destinations[0].category} • {destinations[0].location}
                  </span>
                  <h3 className="font-serif text-cream text-2xl md:text-3xl lg:text-4xl mb-3">
                    {destinations[0].title}
                  </h3>
                  <p className="text-cream/70 text-sm md:text-base font-sans font-light leading-relaxed mb-4">
                    {destinations[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-sans text-sm tracking-wider group-hover:gap-3 transition-all duration-300">
                    <span>Explore Itinerary</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Kyoto + Monaco stacked */}
            <div className="flex flex-col gap-6">
              <DestinationCard destination={destinations[1]} index={1} />
              <DestinationCard destination={destinations[2]} index={2} />
            </div>
          </div>

          {/* Bento Grid Layout - Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* New York - Wide (spans 2 cols) */}
            <motion.div
              className="group relative overflow-hidden cursor-pointer lg:col-span-2 h-[300px] md:h-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${destinations[3].image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="bg-navy/60 backdrop-blur-md border border-white/10 p-5 md:p-6 max-w-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-gold text-xs font-sans font-medium uppercase tracking-wider block mb-2">
                    {destinations[3].category} • {destinations[3].location}
                  </span>
                  <h3 className="font-serif text-cream text-xl md:text-2xl mb-2">
                    {destinations[3].title}
                  </h3>
                  <p className="text-cream/60 text-sm font-sans font-light leading-relaxed line-clamp-2">
                    {destinations[3].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Alpine */}
            <DestinationCard destination={destinations[4]} index={4} />
          </div>

          {/* Bento Grid Layout - Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard destination={destinations[5]} index={5} />
          </div>

          {/* View All Button */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="group flex items-center gap-3 px-6 py-4 border border-white/20 text-cream font-sans text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300">
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="flex flex-col gap-4 text-center lg:text-left max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream leading-tight">
                Ready to plan your next <span className="text-gold italic">corporate retreat</span>?
              </h2>
              <p className="text-cream/60 font-sans font-light text-lg">
                Inquire about a custom itinerary designed specifically for your team's objectives and preferences.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="flex items-center justify-center min-w-[200px] h-14 px-8 bg-gold text-navy font-sans font-semibold tracking-wider uppercase hover:bg-cream transition-colors duration-300"
              >
                Contact Concierge
              </Link>
              <button className="flex items-center justify-center min-w-[200px] h-14 px-8 border border-white/20 text-cream font-sans tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300">
                Download Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
