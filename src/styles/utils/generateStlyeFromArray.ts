import type { CSSProperties } from '@vanilla-extract/css'
import { style } from '@vanilla-extract/css'

export default function generateStyleFromArray<T extends string | number>(
  property: keyof CSSProperties,
  values: readonly T[]
) {
  return values.reduce((acc, value) => ({ ...acc, [value]: style({ [property]: value }) }), {}) as {
    [K in T]: string
  }
}
