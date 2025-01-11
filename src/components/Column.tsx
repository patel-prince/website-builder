import React, { PropsWithChildren } from 'react'

import { classnames } from '../utils'

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface ColumnProps extends PropsWithChildren {
  xs?: ColSize
  sm?: ColSize
  md?: ColSize
  lg?: ColSize
  xl?: ColSize
  className?: string
}

export const Column: React.FC<ColumnProps> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  className = ''
}) => {
  const classes = classnames('col', className, {
    [`col-${xs}`]: xs,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    [`col-xl-${xl}`]: xl
  })

  return <div className={classes}>{children}</div>
}
