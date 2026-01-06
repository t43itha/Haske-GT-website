import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-sm hover:border-gold/30 transition-colors duration-300"
    >
      {/* Quote */}
      <blockquote className="font-serif italic text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-14 h-14 rounded-full object-cover border-2 border-gold/50"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/50">
            <span className="font-serif text-xl text-gold">
              {author.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex flex-col">
          <span className="font-sans text-sm font-semibold text-white">
            {author}
          </span>
          <span className="font-sans text-xs text-gold tracking-wide">
            {role}
          </span>
          <span className="font-sans text-xs text-cream/50">
            {company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
