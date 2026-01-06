import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';

interface Logo {
  name: string;
  image?: string;
}

interface TrustLogosProps {
  title?: string;
  logos: Logo[];
  variant?: 'dark' | 'light';
}

export default function TrustLogos({
  title = 'Trusted By',
  logos,
  variant = 'light'
}: TrustLogosProps) {
  const bgStyles = {
    dark: 'bg-navy',
    light: 'bg-cream',
  };

  const textStyles = {
    dark: 'text-cream/40',
    light: 'text-navy/40',
  };

  return (
    <section className={`py-16 md:py-20 ${bgStyles[variant]}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionBadge variant={variant}>{title}</SectionBadge>
        </motion.div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className={`h-8 md:h-10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                />
              ) : (
                <span className={`font-sans font-semibold text-lg tracking-wider uppercase ${textStyles[variant]} group-hover:text-gold transition-colors duration-300`}>
                  {logo.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
