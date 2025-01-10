import { FC, PropsWithChildren } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import { classnames } from '../utils'

export interface DataCardProps extends PropsWithChildren {
  onClick?: () => void
  onCreate?: () => void
  title?: string
}

export const DataCard: FC<DataCardProps> = ({ children, onClick, onCreate, title }) => {
  const wrapperClasses = classnames('data-card', {
    clickable: !!onClick || onCreate
  })
  const bodyClasses = classnames('data-card-body', {
    'data-card-add': !!onCreate
  })
  return (
    <div
      className={wrapperClasses}
      onClick={() => {
        if (onClick) onClick()
        if (onCreate) onCreate()
      }}
    >
      <div className={bodyClasses}>
        {onCreate && (
          <>
            <div className="data-card-add-icon">
              <AiOutlinePlus />
            </div>
            <h3 className="text-subtitle">{title || 'Add New'}</h3>
          </>
        )}
        {children}
      </div>
    </div>
  )
}
