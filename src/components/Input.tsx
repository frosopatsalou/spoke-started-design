import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

/** Figma Input: Default, Focus and Error. Error messages are linked to the field. */
export function Input({ label = 'Your name', placeholder = 'First and last name', error, id, className = '', 'aria-describedby': describedBy, ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`
  const description = [describedBy, error ? errorId : undefined].filter(Boolean).join(' ') || undefined

  return (
    <div className={`spoke-input ${className}`}>
      <label htmlFor={inputId}>{label}</label>
      <input {...props} id={inputId} className="spoke-input__field" placeholder={placeholder} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={description} />
      {error && <p id={errorId} className="spoke-input__error" aria-live="polite">Error: {error}</p>}
    </div>
  )
}
