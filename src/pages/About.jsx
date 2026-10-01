import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTABanner from '../sections/CTABanner.jsx'
import { stats } from '../data/site.js'

const values = [
  { Icon: FiTarget, title: 'Our Mission', text: 'To deliver flawless, professional sound for every event we touch — empowering moments that move people.' },
  { Icon: FiEye,    title: 'Our Vision',  text: 'To be West Africa\'s most trusted name in event sound, equipment rental and audio installation.' },
  { Icon: FiHeart,  title: 'Our Values',  text: 'Reliability, technical excellence, integrity, and an obsessive love for great sound.' }
]

// NOTE: Placeholder portraits — please replace with real team photos before launch.
const team = [
  { name: 'Joshua A.',   role: 'Founder · Lead Engineer', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ada N.',      role: 'FOH Engineer',            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Samuel O.',   role: 'Stage Manager',           img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80' },
  { name: 'Chinaza U.',  role: 'Installations Lead',      img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80' }
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Jocci Sound"
        title="Engineering sound that connects."
        subtitle="A passionate team of audio professionals delivering premium sound experiences across Nigeria."
        breadcrumb="About"
        image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-4">From a passion for clarity, a company was born.</h2>
            <p className="mt-5 text-ink-700 leading-relaxed">
              Jocci Sound Engineering started as a small crew of audio enthusiasts setting up church
              programs and weddings in Lagos. Over a decade later, we've grown into a full-scale audio
              company powering concerts, conferences, corporate events and permanent installations —
              while staying true to our roots: dependable service and exceptional sound.
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed">
              Today, our inventory spans premium line array systems, digital consoles, wireless mic
              packages, drum kits and stage essentials — all maintained by certified technicians and
              deployed by engineers who treat your event like their own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-md shadow-soft">
              <img src="https://images.unsplash.com/photo-1567002260052-9b9c9a8b9b3e?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-3">
              <div className="aspect-square overflow-hidden rounded-md shadow-soft">
                <img src="https://images.unsplash.com/photo-1571266028243-d220bc11e1ee?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-md shadow-soft">
                <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-ink-200 border-y border-ink-200">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-display text-5xl md:text-6xl text-brand-500">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-ink-600 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, vision and values."
            subtitle="The principles guiding every cable we run and every mix we ride."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8"
              >
                <div className="w-14 h-14 grid place-items-center bg-brand-500 text-white mb-6 shadow-glow">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-ink-800/40">
        <div className="container-x">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Engineers behind every great mix."
            align="center"
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="font-display text-xl tracking-wide">{m.name}</p>
                  <p className="text-xs uppercase tracking-widest text-brand-400 mt-1">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
