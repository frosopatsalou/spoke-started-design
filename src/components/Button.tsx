/** Figma component 3:33; see README.md for props and state behaviour. */
import type { ButtonHTMLAttributes } from 'react'
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'Primary' | 'Secondary'; label?: string }
export function Button({ variant = 'Primary', label = 'Book this repair', children, className = '', type = 'button', ...props }: ButtonProps) {
  return <button {...props} type={type} className={`spoke-button ${variant === 'Secondary' ? 'spoke-button--secondary' : ''} ${className}`}>{children ?? label}</button>
}
