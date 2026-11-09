/** Figma component 6:24; see README.md for props and state behaviour. */
import chevronLeft from '../assets/chevron-left.svg'
export type TopBarProps = { title?: string; step?: string; onBack?: () => void; className?: string }
export function TopBar({ title = 'Book a repair', step = 'Step 1 of 3', onBack, className = '' }: TopBarProps) {
  return <header className={`spoke-top-bar ${className}`}><button type="button" className="spoke-top-bar__back" aria-label="Go back" onClick={onBack}><img src={chevronLeft} alt="" width="24" height="24" /></button><p className="spoke-top-bar__title">{title}</p><p className="spoke-top-bar__step">{step}</p></header>
}
