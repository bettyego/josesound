import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { galleryCategories, galleryItems } from '../data/gallery.js'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(
    () => filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter),
    [filter]
  )

  const open  = (idx) => setActiveIndex(idx)
  const close = ()    => setActiveIndex(null)
  const prev  = ()    => setActiveIndex(i => (i - 1 + filtered.length) % filtered.length)
  const next  = ()    => setActiveIndex(i => (i + 1) % filtered.length)

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Stages we've powered."
        subtitle="A curated look at events, equipment and setups from across our portfolio."
        breadcrumb="Gallery"
        image="https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="container-x">
          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {galleryCategories.map(cat => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setActiveIndex(null) }}
                  className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border transition-all
                    ${active
                      ? 'bg-brand-500 border-brand-500 text-white shadow-glow'
                      : 'border-white/15 text-white/70 hover:border-brand-500 hover:text-brand-400'}`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.button
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => open(i)}
                  className="relative aspect-square overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/20 to-transparent
                                  opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] uppercase tracking-widest text-brand-400 font-semibold">
                      {item.category}
                    </span>
                    <p className="text-sm text-white truncate">{item.alt}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={activeIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
