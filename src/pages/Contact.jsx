import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import { company } from '../data/site.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: hook up to backend or email service (e.g., Formspree)
    console.log('Contact form submission:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const contactCards = [
    { Icon: FiMapPin, label: 'Visit Us',  value: company.address,                       href: '#map' },
    { Icon: FiPhone,  label: 'Call Us',   value: company.phone,                         href: `tel:${company.phone.replace(/\s/g,'')}` },
    { Icon: FiMail,   label: 'Email Us',  value: company.email,                         href: `mailto:${company.email}` },
    { Icon: FiClock,  label: 'Hours',     value: company.hours,                         href: null }
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk sound."
        subtitle="Reach out for quotes, technical questions or just to say hi. We respond fast."
        breadcrumb="Contact"
        image="https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container-x">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {contactCards.map(({ Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <div className="w-12 h-12 grid place-items-center bg-brand-500 text-white mb-4 shadow-glow">
                    <Icon className="text-xl" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">{label}</p>
                  <p className="mt-1 text-white/90 leading-relaxed">{value}</p>
                </>
              )
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card p-6"
                >
                  {href ? <a href={href} className="block">{inner}</a> : inner}
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ink-800/60 border border-white/10 p-7 md:p-9"
            >
              <span className="eyebrow">Send a Message</span>
              <h2 className="heading-md mt-3 mb-7">Get in touch</h2>

              {submitted && (
                <div className="mb-6 flex items-start gap-3 p-4 bg-brand-500/15 border border-brand-500/40 text-sm">
                  <FiCheckCircle className="text-brand-400 text-lg flex-shrink-0 mt-0.5" />
                  <span>Thanks! Your message has been received. We'll be in touch shortly.</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} className="input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="label" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="input" placeholder="you@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} className="input" placeholder="+234 ..." />
                </div>
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className="input resize-none" placeholder="Tell us about your event or question..." />
                </div>
              </div>

              <div className="mt-7">
                <Button type="submit" variant="primary">Send Message <FiSend /></Button>
              </div>
            </motion.form>

            {/* Map */}
            <motion.div
              id="map"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 overflow-hidden min-h-[400px] lg:min-h-full"
            >
              <iframe
                title="Jocci Sound Engineering location"
                src="https://www.google.com/maps?q=Alaba+International+Market+Lagos&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
