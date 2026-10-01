import { motion } from 'framer-motion'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CTABanner from '../sections/CTABanner.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Sound. Designed. Delivered."
        subtitle="From the first soundcheck to the final encore — four core services tailored to your event."
        breadcrumb="Services"
        image="https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=2000&q=80"
      />

      <div className="section">
        <div className="container-x space-y-24">
          {services.map((s, i) => {
            const reversed = i % 2 === 1
            return (
              <motion.article
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center
                  ${reversed ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden border border-white/10 clip-corner">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-ink-800
                                  border border-white/10 px-4 py-3">
                    <div className="w-10 h-10 grid place-items-center bg-brand-500 text-white">
                      <ServiceIcon name={s.icon} />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white/70">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="eyebrow">0{i + 1}. Premium Service</span>
                  <h2 className="heading-md mt-4">{s.title}</h2>
                  <p className="mt-5 text-white/75 leading-relaxed">{s.short}</p>

                  <ul className="mt-8 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-white/85 text-sm">
                        <span className="mt-0.5 w-6 h-6 grid place-items-center bg-brand-500/20 text-brand-400 flex-shrink-0">
                          <FiCheck />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button to="/booking" variant="primary">Request Quote <FiArrowRight /></Button>
                    <Button to="/contact" variant="outline">Ask a Question</Button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <CTABanner />
    </>
  )
}
