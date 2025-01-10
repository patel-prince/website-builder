import { FC, PropsWithChildren } from 'react'

import { classnames } from '../utils'

interface TypographyProps extends PropsWithChildren {
  weight?: 'light' | 'regular' | 'medium' | 'bold'
}

const getTypographyClasses = (
  defaultClasses: string,
  params: Pick<TypographyProps, 'weight'>
) => {
  return classnames(defaultClasses, {
    [`text-${params.weight}`]: params.weight
  })
}

export const Heading: FC<TypographyProps> = ({ children, ...props }) => {
  return <h1 className={getTypographyClasses('text-heading', props)}>{children}</h1>
}

export const Title: FC<TypographyProps> = ({ children, ...props }) => {
  return <h1 className={getTypographyClasses('text-title', props)}>{children}</h1>
}

export const Subtitle: FC<TypographyProps> = ({ children, ...props }) => {
  return <h2 className={getTypographyClasses('text-subtitle', props)}>{children}</h2>
}

export const Text: FC<TypographyProps> = ({ children, ...props }) => {
  return <p className={getTypographyClasses('text-paragraph', props)}>{children}</p>
}

export const Label: FC<TypographyProps> = ({ children, ...props }) => {
  return <label className={getTypographyClasses('text-label', props)}>{children}</label>
}
