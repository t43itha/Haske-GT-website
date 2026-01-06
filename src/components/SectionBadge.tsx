import { motion } from 'framer-motion';

interface SectionBadgeProps {
  children: string;
  variant?: 'dark' | 'light';
}

export default function SectionBadge({ children, variant = 'dark' }: SectionBadgeProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full px-4 py-1.5';

  const variants = {
    dark: 'border border-gold/30 bg-navy/50 backdrop-blur-sm',
    light: 'border border-navy/20 bg-cream/80 backdrop-blur-sm',
  };

  const textStyles = {
    dark: 'text-gold',
    light: 'text-navy',
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <span className={`w-2 h-2 rounded-full ${variant === 'dark' ? 'bg-gold' : 'bg-navy'}`} />
      <span className={`text-xs font-sans font-medium tracking-[0.2em] uppercase ${textStyles[variant]}`}>
        {children}
      </span>
    </motion.span>
  );
}
