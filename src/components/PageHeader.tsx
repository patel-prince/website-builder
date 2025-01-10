import { FC } from 'react'

export interface PageHeaderProps {
  title: string
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className="page-header">
      <h1 className="text-title">{title}</h1>
    </div>
  )
}
