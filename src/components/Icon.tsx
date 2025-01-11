import * as AiIcons from 'react-icons/ai'

import { classnames } from '../utils'

export interface IconProps {
  name: keyof typeof AiIcons
  onClick?: () => void
}

export const Icon = ({ name, onClick }: IconProps) => {
  const IconComponent = AiIcons[name]
  const wrapperClasses = classnames({
    clickable: !!onClick
  })
  return <IconComponent size={'1.25rem'} onClick={onClick} className={wrapperClasses} />
}
