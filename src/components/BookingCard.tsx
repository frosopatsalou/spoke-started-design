import { useId } from 'react'
import { Button } from './Button'
import { Tag } from './Tag'

export type BookingCardProps = {
  title?: string
  description?: string
  duration?: string
  bikeType?: string
  price?: string
  nextSlot?: string
  buttonLabel?: string
  onBook?: () => void
  className?: string
}

// Figma frame 4:6: same visual design as the clean Booking card (3:34).
// Compose the existing design-system components rather than fixed-position layers.
export function BookingCard({
  title = 'Flat tyre repair',
  description = 'Tube or tyre swap, any wheel size.',
  duration = '30 min',
  bikeType = 'All bikes',
  price = '€15',
  nextSlot = 'Next free slot: today at 16:30',
  buttonLabel = 'Book this repair',
  onBook,
  className = '',
}: BookingCardProps) {
  const titleId = useId()

  return (
    <article className={`spoke-booking-card ${className}`} aria-labelledby={titleId}>
      <div className="spoke-booking-card__header">
        <h3 id={titleId} className="spoke-booking-card__title">{title}</h3>
        <p className="spoke-booking-card__description">{description}</p>
      </div>
      <div className="spoke-booking-card__meta">
        <div className="spoke-tags">
          <Tag label={duration} />
          <Tag label={bikeType} />
        </div>
        <p className="spoke-booking-card__price">{price}</p>
      </div>
      <p className="spoke-booking-card__caption">{nextSlot}</p>
      <Button label={buttonLabel} onClick={onBook} />
    </article>
  )
}
