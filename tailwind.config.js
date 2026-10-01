/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral scale: 50 = white, 900 = deepest charcoal.
        // Used via bg-ink-100 (page bg), bg-ink-200 (section bg), bg-ink-800/900 (dark sections).
        ink: {
          50:  '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        brand: {
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow:  '0 0 32px rgba(249, 115, 22, 0.35)',
        card:  '0 10px 30px -12px rgba(17, 24, 39, 0.12)',
        soft:  '0 4px 16px -8px rgba(17, 24, 39, 0.08)',
        hard:  '0 20px 60px -20px rgba(17, 24, 39, 0.20)'
      },
      backgroundImage: {
        'grid-fade':    'radial-gradient(circle at center, rgba(17,24,39,0.05) 1px, transparent 1px)',
        'hero-overlay': 'linear-gradient(180deg, rgba(17,24,39,0.55) 0%, rgba(17,24,39,0.92) 100%)',
        'soft-fade':    'linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'pulse-soft': {
          '0%,100%': { opacity: 0.5 },
          '50%': { opacity: 1 }
        },
        'equalizer': {
          '0%,100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'equalizer': 'equalizer 1s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
