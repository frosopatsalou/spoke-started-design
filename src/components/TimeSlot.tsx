/** Figma component 6:14; see README.md for props and state behaviour. */
import type { ButtonHTMLAttributes } from 'react'
export type TimeSlotProps = ButtonHTMLAttributes<HTMLButtonElement> & { label?: string; state?: 'Default' | 'Selected' | 'Disabled' }
export function TimeSlot({ label = '16:30', state = 'Default', disabled, children, className = '', type = 'button', ...props }: TimeSlotProps) {
  return <button {...props} type={type} className={`spoke-time-slot ${className}`} disabled={disabled || state === 'Disabled'} aria-pressed={state === 'Selected'}>{children ?? label}</button>
}
