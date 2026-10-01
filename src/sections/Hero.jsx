import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import Button from '../components/Button.jsx'

const HERO_BG =
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden on-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/55 to-transparent" />
      </div>

      {/* Decorative equalizer bars */}
      <div className="absolute right-6 bottom-10 hidden md:flex items-end gap-1 h-32" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="w-1 bg-brand-500/60 rounded-sm origin-bottom animate-equalizer"
            style={{
              height: `${20 + Math.random() * 80}%`,
              animationDelay: `${-(i * 0.07).toFixed(2)}s`,
              animationDuration: `${0.8 + Math.random() * 0.7}s`
            }}
          />
        ))}
      </div>

      <div className="container-x relative pt-28 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Sound Engineering · Lagos, Nigeria
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl mt-6 max-w-5xl text-white"
        >
          Premium <span className="text-brand-500">Sound</span> Experience<br className="hidden md:block" />
          For Every Event.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
        >
          From intimate weddings to stadium-grade concerts, Jocci Sound Engineering delivers
          flawless audio with top-tier equipment and engineers who live for clarity, depth and power.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to="/booking" variant="primary">
            Book Now <FiArrowRight />
          </Button>
          <Button to="/services" variant="outline">
            <FiPlay /> View Services
          </Button>
        </motion.div>

        {/* Hero stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/15 max-w-3xl rounded-md overflow-hidden"
        >
          {[
            { v: '500+',  l: 'Events Powered' },
            { v: '12+',   l: 'Years Experience' },
            { v: '50+',   l: 'Pro Devices' },
            { v: '24/7',  l: 'Tech Support' }
          ].map((s, i) => (
            <div key={i} className="bg-ink-900/85 backdrop-blur px-5 py-5">
              <div className="font-display text-3xl text-brand-500">{s.v}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-brand-500 to-transparent animate-pulse-soft" />
      </div>
    </section>
  )
}
