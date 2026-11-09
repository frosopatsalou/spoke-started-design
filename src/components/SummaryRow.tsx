/** Figma component 11:34; see README.md for props and state behaviour. */
import type { ReactNode } from 'react'
export type SummaryRowProps = { label?: string; value?: ReactNode; className?: string }
export function SummaryRow({ label = 'Service', value = 'Flat tyre repair', className = '' }: SummaryRowProps) {
  return <div className={`spoke-summary-row ${className}`}><span className="spoke-summary-row__label">{label}</span><span className="spoke-summary-row__value">{value}</span></div>
}
