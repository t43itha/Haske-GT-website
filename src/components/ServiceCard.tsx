import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link?: string;
  delay?: number;
  variant?: 'dark' | 'light';
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  link = '/contact',
  delay = 0,
  variant = 'dark'
}: ServiceCardProps) {
  const containerStyles = {
    dark: 'bg-navy-light border-white/5 hover:border-gold/50',
    light: 'bg-white border-gray-100 hover:border-gold/50 shadow-sm',
  };

  const iconStyles = {
    dark: 'text-gold group-hover:text-white',
    light: 'text-gold group-hover:text-navy',
  };

  const titleStyles = {
    dark: 'text-white',
    light: 'text-navy',
  };

  const descStyles = {
    dark: 'text-gray-400 group-hover:text-gray-300',
    light: 'text-charcoal/60',
  };

  const featureStyles = {
    dark: 'text-gray-500 group-hover:text-gold/80',
    light: 'text-charcoal/50 group-hover:text-gold',
  };

  const borderStyles = {
    dark: 'border-white/10',
    light: 'border-gray-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`group relative h-full flex flex-col p-8 rounded-sm border transition-all duration-300 ${containerStyles[variant]}`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 mb-6 transition-colors duration-300 ${iconStyles[variant]}`}>
        <Icon className="w-full h-full" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className={`font-serif text-2xl mb-4 ${titleStyles[variant]}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`font-sans text-sm leading-relaxed mb-6 ${descStyles[variant]}`}>
        {description}
      </p>

      {/* Features */}
      <div className={`flex-grow space-y-3 border-t pt-6 mt-auto ${borderStyles[variant]}`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 text-sm transition-colors duration-300 ${featureStyles[variant]}`}
          >
            <Check className="w-4 h-4 text-gold flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        to={link}
        className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-white transition-colors duration-300"
      >
        Inquire Now
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
