/** Figma component 11:33; see README.md for props and state behaviour. */
import type { ButtonHTMLAttributes } from 'react'
import { Tag } from './Tag'
export type ServiceCardProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & { title?: string; description?: string; price?: string; duration?: string; state?: 'Default' | 'Selected' }
export function ServiceCard({ title = 'Flat tyre repair', description = 'Tube or tyre swap, any wheel size.', price = '€15', duration = '30 min', state = 'Default', className = '', type = 'button', ...props }: ServiceCardProps) {
  return <button {...props} type={type} className={`spoke-service-card ${className}`} aria-pressed={state === 'Selected'}><span className="spoke-service-card__header"><span className="spoke-service-card__title">{title}</span><span>{price}</span></span><span className="spoke-service-card__description">{description}</span><span className="spoke-tags"><Tag label={duration} /></span></button>
}
