import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import Button from '../components/Button.jsx'
import { company } from '../data/site.js'

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden on-dark">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/90 to-ink-900/75" />
      </div>

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-10 items-center"
        >
          <div className="lg:col-span-2">
            <span className="eyebrow">Ready When You Are</span>
            <h2 className="heading-lg mt-4 text-white">
              Let's make your next event <span className="text-brand-500">unforgettable.</span>
            </h2>
            <p className="mt-5 text-white/80 max-w-2xl">
              Tell us about your venue, audience and date — we'll design a sound experience that fits your
              vision and budget.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Button to="/booking" variant="primary">Book Your Event <FiArrowRight /></Button>
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="btn-ghost justify-center lg:w-auto"
            >
              <FiPhone /> {company.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
