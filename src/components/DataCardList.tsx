import { FC, PropsWithChildren } from 'react'

export const DataCardList: FC<PropsWithChildren> = ({ children }) => {
  return <div className="data-card-list">{children}</div>
}
