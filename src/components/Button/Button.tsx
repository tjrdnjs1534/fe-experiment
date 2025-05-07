import React from 'react'
import { clsx } from 'clsx'
import {
  buttonBase,
  buttonColorVariants,
  buttonSizeVariants,
  fullWidth as fullWidthStyle,
} from './button.css'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof buttonColorVariants
  size: keyof typeof buttonSizeVariants
  loading?: boolean
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      className={clsx(
        buttonBase,
        buttonColorVariants[variant],
        buttonSizeVariants[size],
        fullWidth && fullWidthStyle,
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span>Loading...</span> // 추후 스피너 컴포넌트 연결 가능
      ) : (
        <>{children}</>
      )}
    </button>
  )
}
