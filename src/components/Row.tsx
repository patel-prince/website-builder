import React, { PropsWithChildren } from 'react'

interface RowProps extends PropsWithChildren {
  className?: string
}

export const Row: React.FC<RowProps> = ({ children, className = '' }) => {
  return <div className={`row ${className}`}>{children}</div>
}
