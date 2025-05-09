import React, { ReactNode, AllHTMLAttributes, DOMAttributes, JSX, Ref } from 'react'
import clsx, { type ClassValue } from 'clsx'
import { getStyleFromProps } from '@styles/utils/getStyleFromProps'
import * as reset from '@styles/resetComponent.css'
import { type Sprinkles } from '@styles/sprinkles.css'

export type BoxOwnProps = Partial<Sprinkles> & {
  as?: keyof JSX.IntrinsicElements
  className?: ClassValue
  children?: ReactNode
  ref?: Ref<unknown>
}

type PolymorphicComponentProps = BoxOwnProps &
  Omit<AllHTMLAttributes<HTMLElement>, 'className' | 'style'> &
  Omit<DOMAttributes<HTMLElement>, 'children' | 'dangerouslySetInnerHTML'>

export const Box = ({ as, className, children, ref, ...props }: PolymorphicComponentProps) => {
  const Component = as || 'div'
  const { classNames, restProps } = getStyleFromProps(props)

  const mergedClassName = clsx(
    reset.base,
    reset.element[Component as keyof typeof reset.element],
    ...classNames,
    className
  )

  return React.createElement(Component, {
    ref,
    className: mergedClassName,
    ...restProps,
    children,
  })
}
