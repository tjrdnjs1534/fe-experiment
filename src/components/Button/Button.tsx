import React from 'react'
import { type ClassValue, clsx } from 'clsx'
import { Box, BoxOwnProps } from '@components/private/Box'

type ButtonElementType = 'a' | 'button'

type AsElementProps<T extends ButtonElementType> = T extends 'a'
  ? Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>>
  : T extends 'button'
    ? Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>
    : never

export type ButtonProps<T extends ButtonElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'white'
  display?: 'block' | 'inline-block' | 'inline-flex'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  loading?: boolean
  className?: ClassValue
  children?: React.ReactNode
  disabled?: boolean
} & Omit<AsElementProps<T>, 'color'>

export function Button({
  variant = 'primary',
  display = 'block',
  size = 'medium',
  fullWidth = false,
  loading = false,
  as = 'button',
  className,
  disabled,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading

  const getVariantProps = (): BoxOwnProps => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isDisabled ? 'bgSteelBlue' : 'blue300',
          color: isDisabled ? 'steelBlue' : 'white',
        }
      case 'secondary':
        return {
          backgroundColor: 'dgray100',
          color: isDisabled ? 'dgray300' : 'dgray500',
        }
      case 'tertiary':
        return {
          backgroundColor: isDisabled ? 'dgray500' : 'dgray800',
          color: isDisabled ? 'gray060' : 'white',
        }
      case 'outlined':
        return {
          backgroundColor: 'white',
          borderColor: isDisabled ? 'gray040' : 'gray050',
          borderWidth: '1px',
          borderStyle: 'solid',
          color: isDisabled ? 'gray050' : 'black',
        }
      case 'white':
        return {
          backgroundColor: 'white',
          color: isDisabled ? 'gray050' : 'black',
        }
      default:
        return {}
    }
  }

  const getSizeProps = (): BoxOwnProps => {
    switch (size) {
      case 'small':
        return {
          height: 38,
          fontSize: 'size14',
          borderRadius: 'm',
          py: 's',
        }
      case 'medium':
        return {
          height: 48,
          fontSize: 'size14',
          borderRadius: 'l',
          py: 'm',
        }
      case 'large':
        return {
          height: 48,
          fontSize: 'size16',
          borderRadius: 'l',
          py: 'm',
        }
      default:
        return {}
    }
  }

  const fullWidthProps: BoxOwnProps = fullWidth ? { width: 'full' } : {}

  return (
    <Box
      as={as}
      type={as === 'button' ? 'button' : undefined}
      display={display}
      textAlign="center"
      fontWeight="medium"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      {...fullWidthProps}
      {...getVariantProps()}
      {...getSizeProps()}
      className={clsx(className)}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {loading ? <span>Loading...</span> : children}
    </Box>
  )
}
