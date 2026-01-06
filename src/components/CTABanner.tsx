import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title: string;
  titleAccent?: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

export default function CTABanner({
  title,
  titleAccent,
  description,
  buttonText,
  buttonLink,
  backgroundImage
}: CTABannerProps) {
  return (
    <section className="relative w-full overflow-hidden isolate">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-5xl text-white mb-4 max-w-3xl"
        >
          {title}{' '}
          {titleAccent && (
            <span className="text-gold italic">{titleAccent}</span>
          )}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-cream/70 text-lg max-w-2xl mb-8"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to={buttonLink}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-white text-navy font-sans font-semibold tracking-wider transition-all duration-300 uppercase text-sm"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
