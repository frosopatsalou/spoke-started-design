/** Figma component 11:37; see README.md for props and state behaviour. */
import { Button } from './Button'
import type { ButtonProps } from './Button'
export type ActionBarProps = ButtonProps & { className?: string }
export function ActionBar({ className = '', ...buttonProps }: ActionBarProps) {
  return <footer className={`spoke-action-bar ${className}`}><Button {...buttonProps} /></footer>
}
