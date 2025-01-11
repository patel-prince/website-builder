import RcDrawer, { DrawerProps as RcDrawerProps } from 'rc-drawer'
import { FC, useState } from 'react'

import { Icon } from './Icon'
import { Subtitle } from './Typography'

export interface DrawerProps extends RcDrawerProps {
  title?: string
  closeOnMaskClick?: boolean
  footer?: React.ReactNode
}

export const useDrawer = (defaultValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultValue)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }
  return { isOpen, open, close }
}

export const Drawer: FC<DrawerProps> = ({
  title,
  onClose,
  children,
  footer,
  ...props
}) => {
  return (
    <RcDrawer
      placement="right"
      width={800}
      onClose={onClose}
      destroyOnClose
      {...props}
      maskMotion={{
        motionAppear: true,
        motionName: 'rc-drawer-mask'
      }}
      motion={{
        motionAppear: true,
        motionName: `rc-drawer-content`
      }}
    >
      <div className="rc-drawer-header">
        <Subtitle>{title}</Subtitle>
        <Icon name="AiOutlineClose" onClick={onClose as () => void} />
      </div>
      <div className="rc-drawer-body">{children}</div>
      {footer && <div className="rc-drawer-footer">{footer}</div>}
    </RcDrawer>
  )
}
