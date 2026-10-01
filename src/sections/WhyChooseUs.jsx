import { motion } from 'framer-motion'
import { FiShield, FiZap, FiUsers, FiHeadphones, FiClock, FiAward } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'

const reasons = [
  { Icon: FiShield,     title: 'Reliable Equipment',     desc: 'Industry-leading brands maintained to perfection — backed up so your event never skips a beat.' },
  { Icon: FiAward,      title: 'Premium Quality',        desc: 'Studio-grade clarity at any venue size, tuned by engineers who know how rooms breathe.' },
  { Icon: FiUsers,      title: 'Experienced Team',       desc: '12+ years and 500+ events strong. Our engineers are calm, fast and obsessive about detail.' },
  { Icon: FiZap,        title: 'Fast Turnaround',        desc: 'Quick quotes, quick load-ins. We respect your schedule and bring contingency plans for everything.' },
  { Icon: FiHeadphones, title: 'Custom Sound Design',    desc: 'No two events are the same. We design audio around your venue, audience and program flow.' },
  { Icon: FiClock,      title: '24/7 Tech Support',      desc: 'On-site engineers throughout your event — plus a hotline you can call any time.' }
]

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Jocci Sound"
          title="Built for the moments that matter."
          subtitle="A small list of reasons our clients keep coming back — and recommending us to others."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-ink-200 rounded-lg shadow-soft p-8 group
                         hover:shadow-card hover:-translate-y-1 hover:border-brand-500/40
                         transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-brand-500 group-hover:w-full transition-all duration-500" />
              <div className="w-14 h-14 grid place-items-center bg-brand-50 border border-brand-100 text-brand-500
                              group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500
                              transition-all duration-300 mb-6 rounded-md">
                <Icon className="text-2xl" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide mb-3 text-ink-900">{title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
