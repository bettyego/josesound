import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'

const EVENT_TYPES = ['Wedding', 'Concert', 'Church Program', 'Corporate Event', 'Birthday / Party', 'Other']
const EQUIPMENT   = ['Speakers / PA', 'Mixing Console', 'Microphones (Wired/Wireless)', 'Drum Kit', 'Stage Lighting', 'DJ Setup', 'Live Engineer']
const BUDGETS     = ['Under ₦200,000', '₦200,000 – ₦500,000', '₦500,000 – ₦1,000,000', '₦1,000,000+']

const initial = {
  name: '', email: '', phone: '',
  eventType: EVENT_TYPES[0], date: '', location: '',
  equipment: [], budget: BUDGETS[0], notes: ''
}

export default function Booking() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const toggleEquip = (item) =>
    setForm(f => ({ ...f, equipment: f.equipment.includes(item)
      ? f.equipment.filter(x => x !== item)
      : [...f.equipment, item] }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: hook up to a backend / email service.
    console.log('Booking submission:', form)
    setSubmitted(true)
    setForm(initial)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        eyebrow="Book an Event"
        title="Plan your sound. In minutes."
        subtitle="Tell us about your event and we'll come back with a detailed quote and equipment plan."
        breadcrumb="Booking"
        image="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-ink-800/60 border border-white/10 p-7 md:p-10 space-y-7"
          >
            {submitted && (
              <div className="flex items-start gap-3 p-4 bg-brand-500/15 border border-brand-500/40 text-sm">
                <FiCheckCircle className="text-brand-400 text-lg flex-shrink-0 mt-0.5" />
                <span>Booking received! Our team will contact you within 24 hours with a tailored quote.</span>
              </div>
            )}

            {/* Personal */}
            <div>
              <span className="eyebrow">Step 01</span>
              <h3 className="heading-md mt-2 mb-5">Your Details</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label" htmlFor="b-name">Full Name</label>
                  <input id="b-name" required value={form.name} onChange={e => update('name', e.target.value)} className="input" placeholder="Your name" />
                </div>
                <div>
                  <label className="label" htmlFor="b-email">Email</label>
                  <input id="b-email" type="email" required value={form.email} onChange={e => update('email', e.target.value)} className="input" placeholder="you@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="b-phone">Phone</label>
                  <input id="b-phone" type="tel" required value={form.phone} onChange={e => update('phone', e.target.value)} className="input" placeholder="+234 ..." />
                </div>
              </div>
            </div>

            {/* Event */}
            <div className="pt-2 border-t border-white/5">
              <span className="eyebrow">Step 02</span>
              <h3 className="heading-md mt-2 mb-5">Event Information</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="label" htmlFor="b-type">Event Type</label>
                  <select id="b-type" value={form.eventType} onChange={e => update('eventType', e.target.value)} className="input">
                    {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="b-date">Event Date</label>
                  <div className="relative">
                    <input id="b-date" type="date" required value={form.date} onChange={e => update('date', e.target.value)} className="input pr-10" />
                    <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="label" htmlFor="b-loc">Event Location</label>
                  <input id="b-loc" required value={form.location} onChange={e => update('location', e.target.value)} className="input" placeholder="Venue name & city" />
                </div>
              </div>
            </div>

            {/* Equipment */}
            <div className="pt-2 border-t border-white/5">
              <span className="eyebrow">Step 03</span>
              <h3 className="heading-md mt-2 mb-5">Equipment Needed</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {EQUIPMENT.map(item => {
                  const active = form.equipment.includes(item)
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleEquip(item)}
                      className={`text-left px-4 py-3 border text-sm transition-all
                        ${active
                          ? 'border-brand-500 bg-brand-500/15 text-white'
                          : 'border-white/10 bg-ink-900 text-white/70 hover:border-brand-500/60'}`}
                    >
                      <span className={`inline-block w-3 h-3 mr-3 align-middle ${active ? 'bg-brand-500' : 'bg-white/15'}`} />
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Budget + notes */}
            <div className="pt-2 border-t border-white/5">
              <span className="eyebrow">Step 04</span>
              <h3 className="heading-md mt-2 mb-5">Budget &amp; Notes</h3>
              <div className="grid gap-5">
                <div>
                  <label className="label" htmlFor="b-budget">Budget Range</label>
                  <select id="b-budget" value={form.budget} onChange={e => update('budget', e.target.value)} className="input">
                    {BUDGETS.map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label" htmlFor="b-notes">Additional Notes</label>
                  <textarea id="b-notes" rows={4} value={form.notes} onChange={e => update('notes', e.target.value)} className="input resize-none" placeholder="Audience size, stage size, special requests..." />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <Button type="submit" variant="primary">Submit Booking <FiArrowRight /></Button>
              <p className="text-xs text-white/40 mt-3">By submitting, you agree to be contacted by our team about your event.</p>
            </div>
          </motion.form>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-ink-800/60 border border-white/10 p-7">
              <h4 className="font-display text-xl uppercase tracking-wide mb-4">Why book with us?</h4>
              <ul className="space-y-3 text-sm text-white/75">
                <li className="flex gap-2"><span className="text-brand-500">▸</span> Free consultation &amp; site survey</li>
                <li className="flex gap-2"><span className="text-brand-500">▸</span> 24-hour quote turnaround</li>
                <li className="flex gap-2"><span className="text-brand-500">▸</span> Backup gear on every event</li>
                <li className="flex gap-2"><span className="text-brand-500">▸</span> Certified live engineers</li>
                <li className="flex gap-2"><span className="text-brand-500">▸</span> Transparent, fair pricing</li>
              </ul>
            </div>
            <div className="bg-brand-500 text-white p-7 shadow-glow">
              <p className="text-xs uppercase tracking-widest opacity-80">Need it fast?</p>
              <p className="font-display text-2xl mt-2">Call us directly</p>
              <p className="mt-1 text-sm opacity-90">We handle last-minute bookings every week.</p>
              <a href="tel:+2348000000000" className="mt-4 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
                +234 800 000 0000 <FiArrowRight />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
