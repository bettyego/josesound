import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import { galleryItems } from '../data/gallery.js'

export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6)

  return (
    <section className="section bg-ink-200">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Work"
            title="Sound stories captured."
            subtitle="A snapshot of stages we've powered, gear we trust and setups we're proud of."
          />
          <Link
            to="/gallery"
            className="self-start md:self-end inline-flex items-center gap-2 text-sm uppercase tracking-widest
                       text-brand-600 font-semibold hover:gap-3 hover:text-brand-700 transition-all"
          >
            Full gallery <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden group cursor-pointer rounded-md shadow-soft
                ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full' : 'aspect-square'}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent
                              opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] uppercase tracking-widest text-brand-300 font-semibold">
                  {item.category}
                </span>
                <p className="text-sm text-white truncate">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
