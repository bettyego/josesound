import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const total = testimonials.length

  const prev = () => setI((p) => (p - 1 + total) % total)
  const next = () => setI((p) => (p + 1) % total)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[i]

  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-noise opacity-60" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Client Voices"
          title="What our clients say."
          subtitle="Real words from real organisers, couples and producers we've worked with."
          align="center"
        />

        <div className="mt-14 max-w-3xl mx-auto relative">
          <FaQuoteLeft className="absolute -top-2 -left-2 md:-left-10 text-6xl text-brand-500/15" />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-ink-800 font-light italic">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <p className="font-display text-lg tracking-wide text-brand-600">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-ink-500 mt-1">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 grid place-items-center bg-white border border-ink-200 text-ink-700
                         hover:bg-brand-500 hover:border-brand-500 hover:text-white shadow-soft
                         transition-colors rounded-md"
            >
              <FiChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to testimonial ${k + 1}`}
                  className={`h-1.5 transition-all rounded-sm
                    ${i === k ? 'w-8 bg-brand-500' : 'w-3 bg-ink-300 hover:bg-ink-400'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 grid place-items-center bg-white border border-ink-200 text-ink-700
                         hover:bg-brand-500 hover:border-brand-500 hover:text-white shadow-soft
                         transition-colors rounded-md"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
