import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

/**
 * Accessible lightbox modal for the gallery.
 *
 * Props:
 *  - items: array of { src, alt }
 *  - index: current index | null when closed
 *  - onClose, onPrev, onNext
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const open = index !== null && index !== undefined

  const handleKey = useCallback((e) => {
    if (!open) return
    if (e.key === 'Escape')      onClose()
    if (e.key === 'ArrowLeft')   onPrev()
    if (e.key === 'ArrowRight')  onNext()
  }, [open, onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-ink-900/95 backdrop-blur-sm grid place-items-center p-4 sm:p-8 on-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-12 h-12 grid place-items-center bg-ink-800 border border-ink-700
                       rounded-md text-white hover:bg-brand-500 hover:border-brand-500 transition-colors z-10"
          >
            <FiX className="text-2xl" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center
                       bg-ink-800 border border-ink-700 rounded-md text-white
                       hover:bg-brand-500 hover:border-brand-500 transition-colors"
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 grid place-items-center
                       bg-ink-800 border border-ink-700 rounded-md text-white
                       hover:bg-brand-500 hover:border-brand-500 transition-colors"
          >
            <FiChevronRight className="text-2xl" />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[index].src}
              alt={items[index].alt}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <figcaption className="mt-4 text-center text-sm text-white/75">
              {items[index].alt} · {index + 1} / {items.length}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
