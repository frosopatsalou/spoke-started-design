/** Figma component 6:23; see README.md for props and state behaviour. */
import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
export type InputProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; className?: string }
export function Input({ label = 'Your name', placeholder = 'First and last name', id, className = '', ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  return <div className={`spoke-input ${className}`}><label htmlFor={inputId}>{label}</label><input {...props} id={inputId} className="spoke-input__field" placeholder={placeholder} /></div>
}
