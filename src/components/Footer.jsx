import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { company, navLinks, services } from '../data/site.js'

const socialIcons = [
  { Icon: FaInstagram, href: company.socials.instagram, label: 'Instagram' },
  { Icon: FaFacebookF, href: company.socials.facebook,  label: 'Facebook' },
  { Icon: FaTwitter,   href: company.socials.twitter,   label: 'Twitter' },
  { Icon: FaYoutube,   href: company.socials.youtube,   label: 'YouTube' },
  { Icon: FaWhatsapp,  href: company.socials.whatsapp,  label: 'WhatsApp' }
]

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-ink-800 mt-20 on-dark">
      <div className="absolute inset-0 bg-noise-dark opacity-50 pointer-events-none" />

      <div className="container-x relative pt-16 pb-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-5">
          <Logo />
          <p className="text-white/60 text-sm leading-relaxed">
            Premium sound experience for weddings, concerts, church programs and corporate events.
            Built on reliable equipment and engineers who care about every note.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 grid place-items-center bg-ink-800 border border-ink-700 rounded-md
                           text-white/80 hover:text-white hover:border-brand-500 hover:bg-brand-500
                           transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {navLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 hover:text-brand-400 text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s.slug}>
                <Link to="/services" className="text-white/60 hover:text-brand-400 text-sm transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg uppercase tracking-widest mb-5">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><FiMapPin className="text-brand-500 mt-0.5 flex-shrink-0" /> {company.address}</li>
            <li className="flex gap-3"><FiPhone  className="text-brand-500 mt-0.5 flex-shrink-0" />
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-brand-400">{company.phone}</a>
            </li>
            <li className="flex gap-3"><FiMail  className="text-brand-500 mt-0.5 flex-shrink-0" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-400">{company.email}</a>
            </li>
            <li className="flex gap-3"><FiClock className="text-brand-500 mt-0.5 flex-shrink-0" /> {company.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Designed &amp; engineered for sound that moves you.</p>
        </div>
      </div>
    </footer>
  )
}
