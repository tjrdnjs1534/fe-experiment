// styles/sprinkles.css.ts
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { colors } from './tokens/colors'
import { spacing } from './tokens/spaces'
import { radius } from './tokens/radius'
import { sizes } from './tokens/sizes'
import { fontSize } from './tokens/fontSize'
import { fontWeight } from './tokens/fontWeight'

const responsiveProps = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],

  properties: {
    // Layout
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
    ],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    top: spacing,
    right: spacing,
    bottom: spacing,
    left: spacing,

    // Flex/Grid
    flexDirection: ['row', 'column'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: ['flex-start', 'center', 'space-between', 'space-around', 'flex-end'],
    alignItems: ['stretch', 'center', 'flex-start', 'flex-end'],
    alignSelf: ['auto', 'center', 'flex-start', 'flex-end'],
    gap: spacing,
    rowGap: spacing,
    columnGap: spacing,

    // Spacing
    padding: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    margin: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,

    // Sizing
    width: sizes,
    height: sizes,
    minWidth: sizes,
    minHeight: sizes,
    maxWidth: sizes,
    maxHeight: sizes,

    // Border
    borderWidth: ['0px', '1px', '2px'],
    borderStyle: ['solid', 'dashed', 'dotted', 'none'],
    borderColor: colors,
    borderRadius: radius,

    // Background
    backgroundColor: colors,
    backgroundImage: ['none'],
    backgroundSize: ['cover', 'contain'],
    backgroundRepeat: ['no-repeat', 'repeat'],

    // Text
    textAlign: ['left', 'center', 'right'],
    whiteSpace: ['normal', 'nowrap', 'pre'],
    overflow: ['visible', 'hidden', 'auto', 'scroll'],
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: colors,

    cursor: ['auto', 'default', 'pointer', 'not-allowed', 'ew-resize', 'ns-resize'],
  },

  shorthands: {
    p: ['padding'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

export const sprinkles = createSprinkles(responsiveProps)
export type Sprinkles = Parameters<typeof sprinkles>[0]
