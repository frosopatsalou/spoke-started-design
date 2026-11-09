/** Figma component 3:27; see README.md for props and state behaviour. */
import type { HTMLAttributes } from 'react'
export type TagProps = HTMLAttributes<HTMLSpanElement> & { label?: string }
export function Tag({ label = '30 min', children, className = '', ...props }: TagProps) {
  return <span {...props} className={`spoke-tag ${className}`}>{children ?? label}</span>
}
