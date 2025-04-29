import { colors } from './colors'
import { radius } from './radius'
import { spacing } from './spaces'

export const tokens = {
  spacing: spacing,
  color: colors,
  radius: radius,
} as const

export type Tokens = typeof tokens
