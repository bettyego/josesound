import { Link } from 'react-router-dom'

/**
 * Reusable button. Renders <Link> when `to` is provided, <a> for `href`, otherwise <button>.
 *
 * variants: primary | outline | dark
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const base =
    variant === 'outline' ? 'btn-outline' :
    variant === 'dark'    ? 'btn-dark' :
                            'btn-primary'

  const cls = `${base} ${className}`

  if (to)   return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{children}</a>
  return <button type={type} onClick={onClick} className={cls} {...rest}>{children}</button>
}
