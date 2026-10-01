import { Link } from 'react-router-dom'

/**
 * Brand logo lock-up. Uses Tailwind colors so it always matches the theme.
 */
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="Jocci Sound Engineering home">
      <span className="equalizer h-8 w-8" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-widest text-ink-900 group-hover:text-brand-600 transition-colors
                         [.on-dark_&]:text-white [.on-dark_&]:group-hover:text-brand-400">
          JOCCI <span className="text-brand-500">SOUND</span>
        </span>
        {!compact && (
          <span className="block text-[10px] uppercase tracking-[0.35em] text-ink-500 mt-0.5
                           [.on-dark_&]:text-white/60">
            Engineering
          </span>
        )}
      </span>
    </Link>
  )
}
