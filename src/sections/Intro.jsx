import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../components/Button.jsx'

export default function Intro() {
  return (
    <section className="section">
      <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden border border-ink-200 clip-corner shadow-card">
            <img
              src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
              alt="Engineer mixing live audio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white px-6 py-5 shadow-glow hidden md:block rounded-md">
            <div className="font-display text-4xl leading-none">12+</div>
            <div className="text-[10px] uppercase tracking-widest mt-1">Years of Excellence</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden md:flex items-center gap-3 bg-white border border-ink-200 px-4 py-3 rounded-md shadow-soft">
            <span className="equalizer h-6 w-8" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </span>
            <span className="text-xs uppercase tracking-widest text-ink-600">Live Now</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Who We Are</span>
          <h2 className="heading-lg mt-4 text-ink-900">
            Sound that <span className="text-brand-500">moves</span> people.
          </h2>
          <p className="mt-5 text-ink-600 leading-relaxed">
            Jocci Sound Engineering is a Lagos-based audio company specialising in event sound, equipment
            rentals, live engineering and permanent audio installations. We blend professional-grade gear
            with seasoned engineers to deliver crystal-clear sound — whether it's a 50-guest wedding or
            a 5,000-capacity concert.
          </p>
          <p className="mt-4 text-ink-500 leading-relaxed">
            From the first soundcheck to the final encore, our team handles every detail so you can focus
            on the moment. Reliable. Premium. Powerful.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              'Top-tier line array systems',
              'Certified live sound engineers',
              'On-site technical support',
              'Backup gear, zero downtime'
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                <span className="mt-1.5 w-2 h-2 bg-brand-500 flex-shrink-0 rounded-sm" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/about" variant="primary">About Us <FiArrowRight /></Button>
            <Button to="/contact" variant="outline">Talk to Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
