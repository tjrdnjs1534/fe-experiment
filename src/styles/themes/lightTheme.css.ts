import { createTheme } from '@vanilla-extract/css'
import { themeContract } from '../contracts/themeContract'
import { spacing } from '../tokens/spaces'
import { radius } from '../tokens/radius'
import { colors } from '../tokens/colors'

export const lightTheme = createTheme(themeContract, {
  spacing: spacing,
  radius: radius,
  color: colors,
})
