// Central place for site-wide content so pages stay clean and easy to edit.

export const company = {
  name: 'Jocci Sound Engineering',
  shortName: 'Jocci Sound',
  tagline: 'Premium Sound Experience for Every Event',
  phone: '+234 800 000 0000',
  email: 'info@joccisound.com',
  address: 'Alaba International Market, Lagos, Nigeria',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  socials: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    youtube: 'https://youtube.com/',
    whatsapp: 'https://wa.me/2348000000000'
  }
}

export const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/booking',  label: 'Book' },
  { to: '/contact',  label: 'Contact' }
]

export const services = [
  {
    slug: 'event-sound-setup',
    title: 'Event Sound Setup',
    short: 'End-to-end sound design for weddings, concerts, church programs and parties.',
    icon: 'speaker',
    points: [
      'Full PA & monitor systems for any venue size',
      'Wedding, concert, church and corporate events',
      'On-site setup, soundcheck and live mixing',
      'Backup equipment for zero downtime'
    ],
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'equipment-rental',
    title: 'Equipment Rental',
    short: 'Top-tier speakers, mixers, microphones and drum kits — delivered ready to perform.',
    icon: 'mixer',
    points: [
      'Line array & full-range speaker systems',
      'Digital and analog mixing consoles',
      'Wired & wireless microphone packages',
      'Acoustic & electronic drum kits, stands, cables'
    ],
    image: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'live-sound-engineering',
    title: 'Live Sound Engineering',
    short: 'Experienced FOH and monitor engineers for studio-quality live mixes.',
    icon: 'wave',
    points: [
      'FOH (front-of-house) engineers',
      'Monitor engineers for performers',
      'Real-time mixing and effects',
      'Stage management & cue coordination'
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80'
  },
  {
    slug: 'installation-services',
    title: 'Audio System Installation',
    short: 'Permanent audio installations for churches, halls, studios and venues.',
    icon: 'install',
    points: [
      'Custom system design and acoustic tuning',
      'Cabling, racks and patch bays',
      'Networked audio (Dante/AVB) configurations',
      'Maintenance and after-sale support'
    ],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80'
  }
]

export const testimonials = [
  {
    name: 'Pastor Daniel O.',
    role: 'Senior Pastor — Grace Tabernacle',
    quote: 'Jocci Sound transformed our Sunday services. The clarity, the depth, the team — absolutely world class.'
  },
  {
    name: 'Tunde & Amaka',
    role: 'Wedding Couple',
    quote: 'Every guest could hear our vows perfectly. The dancefloor was alive all night. Thank you Jocci team!'
  },
  {
    name: 'Kelvin Eze',
    role: 'Event Producer',
    quote: 'Reliable, punctual, and technically brilliant. They are now my default sound partner for every show.'
  },
  {
    name: 'Sandra A.',
    role: 'Corporate Event Manager',
    quote: 'Crystal clear audio across a 600-seat hall — and the engineers handled every surprise like pros.'
  }
]

export const stats = [
  { value: '500+',  label: 'Events Powered' },
  { value: '12+',   label: 'Years Experience' },
  { value: '50+',   label: 'Premium Devices' },
  { value: '100%',  label: 'Client Satisfaction' }
]
