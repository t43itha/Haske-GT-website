/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#050B14', // Deeper, richer navy
        'gold': '#C5A059', // More metallic gold
        'cream': '#F5F5F0', // Slightly warmer cream
        'charcoal': '#1A202C',
        'platinum': '#E5E4E2',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
      },
      fontWeight: {
        'extralight': '200',
        'light': '300',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #050B14 0%, #000000 50%, #050B14 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #9F7D38 50%, #C5A059 100%)',
        'pearl-gradient': 'linear-gradient(135deg, #F5F5F0 0%, #E5E4E2 100%)',
      },
    },
  },
  plugins: [],
};