import { colors } from '../../styles/tokens/colors'
import { radius } from '../../styles/tokens/radius'
import { fontWeight } from '../../styles/tokens/fontWeight'
import { style, styleVariants } from '@vanilla-extract/css'
import { sizes } from '../../styles/tokens/sizes'

export const buttonBase = style({
  border: 'none',
  paddingBlock: 0,
  paddingInline: 0,
  display: 'inline-flex',
  fontWeight: fontWeight.medium,
  cursor: 'pointer',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

export const buttonColorVariants = styleVariants({
  primary: {
    backgroundColor: colors.blue300,
    color: colors.white,
    selectors: {
      '&:disabled': {
        backgroundColor: colors.bgSteelBlue,
        color: colors.steelBlue,
      },
    },
  },
  secondary: {
    backgroundColor: colors.dgray100,
    color: colors.dgray500,
    selectors: {
      '&:disabled': {
        color: colors.dgray300,
      },
    },
  },
  tertiary: {
    backgroundColor: colors.dgray800,
    color: colors.white,
    selectors: {
      '&:disabled': {
        backgroundColor: colors.dgray500,
        color: colors.gray060,
      },
    },
  },
  outlined: {
    backgroundColor: colors.white,
    borderColor: colors.gray050,
    borderWidth: '1px',
    borderStyle: 'solid',
    selectors: {
      '&:disabled': {
        borderColor: colors.gray040,
        backgroundColor: colors.white,
        color: colors.gray050,
      },
    },
  },
  white: {
    backgroundColor: colors.white,
    selectors: {
      '&:disabled': {
        backgroundColor: colors.white,
        color: colors.gray050,
      },
    },
  },
})

export const buttonSizeVariants = styleVariants({
  small: {
    height: sizes[38],
    fontSize: sizes[14],
    borderRadius: radius.m,
    paddingLeft: sizes[14],
    paddingRight: sizes[14],
  },
  medium: {
    height: sizes[48],
    fontSize: sizes[14],
    borderRadius: radius.l,
    paddingLeft: sizes[16],
    paddingRight: sizes[16],
  },
  large: {
    height: sizes[48],
    fontSize: sizes[16],
    borderRadius: radius.l,
    paddingLeft: sizes[16],
    paddingRight: sizes[16],
  },
})

export const fullWidth = style({
  width: sizes.fullWidth,
})
