import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
}

export default function VeteranBadge({ children = '★ Veteran-Owned', className = '' }: Props) {
  return (
    <div className={`veteran-badge ${className}`}>
      {children}
    </div>
  )
}
