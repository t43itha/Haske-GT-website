import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
  subtitle?: string;
  delay?: number;
  variant?: 'dark' | 'light';
}

export default function StatCard({ value, label, suffix = '', subtitle, delay = 0, variant = 'light' }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue = parseInt(value.replace(/\D/g, ''));
  const hasPrefix = value.startsWith('$');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  const bgStyles = {
    dark: 'bg-white/5 border-white/10 hover:border-gold/30',
    light: 'bg-white border-gray-100 hover:border-gold/30 shadow-sm',
  };

  const numberStyles = {
    dark: 'text-gold',
    light: 'text-navy',
  };

  const labelStyles = {
    dark: 'text-cream/70',
    light: 'text-charcoal/60',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`group flex flex-col items-center justify-center p-8 text-center rounded-sm border transition-all duration-300 ${bgStyles[variant]}`}
    >
      <span className={`font-serif text-5xl md:text-6xl mb-3 transition-transform duration-500 group-hover:scale-105 ${numberStyles[variant]}`}>
        {hasPrefix && '$'}{count.toLocaleString()}{suffix}
      </span>
      <span className={`font-sans text-sm tracking-widest uppercase ${labelStyles[variant]}`}>
        {label}
      </span>
      {subtitle && (
        <span className={`font-sans text-xs mt-2 ${variant === 'dark' ? 'text-cream/50' : 'text-charcoal/50'}`}>
          {subtitle}
        </span>
      )}
    </motion.div>
  );
}
