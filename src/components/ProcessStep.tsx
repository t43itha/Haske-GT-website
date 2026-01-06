import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
  variant?: 'dark' | 'light';
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
  variant = 'dark'
}: ProcessStepProps) {
  const containerStyles = {
    dark: 'bg-white/5 border-white/10 hover:border-gold/30',
    light: 'bg-white border-gray-100 hover:border-gold/30 shadow-sm',
  };

  const numberStyles = {
    dark: 'text-gold/30',
    light: 'text-navy/20',
  };

  const titleStyles = {
    dark: 'text-white',
    light: 'text-navy',
  };

  const descStyles = {
    dark: 'text-gray-400',
    light: 'text-charcoal/60',
  };

  const iconStyles = {
    dark: 'text-gold',
    light: 'text-gold',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-8 rounded-sm border transition-all duration-300 ${containerStyles[variant]}`}
    >
      {/* Large background number */}
      <span className={`absolute top-4 right-6 font-serif text-7xl ${numberStyles[variant]}`}>
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        {Icon && (
          <div className={`w-12 h-12 mb-6 ${iconStyles[variant]}`}>
            <Icon className="w-full h-full" strokeWidth={1.5} />
          </div>
        )}

        <h3 className={`font-serif text-xl mb-3 ${titleStyles[variant]}`}>
          {title}
        </h3>

        <p className={`font-sans text-sm leading-relaxed ${descStyles[variant]}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
