import type { CSSProperties } from '@vanilla-extract/css'
import { style } from '@vanilla-extract/css'

type ComplexStyleRule = Parameters<typeof style>[0]

function generateStyleFromPropertyAndObject<T extends string | number>(
  property: keyof CSSProperties,
  object?: Record<T, unknown>
) {
  return Object.entries(object ?? {}).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: style({ [property]: value }) }),
    {}
  ) as { [K in T]: string }
}

function generateStyleFromRecord<T extends string | number>(record: Record<T, ComplexStyleRule>) {
  return Object.entries<ComplexStyleRule>(record).reduce(
    (acc, [key, styles]) => ({ ...acc, [key]: style(styles) }),
    {}
  ) as { [K in T]: string }
}

export default function generateStyleFromObject<T extends string | number>(
  propertyOrRecord: keyof CSSProperties | Record<T, Parameters<typeof style>[0]>,
  object?: Record<T, unknown>
) {
  if (typeof propertyOrRecord === 'string') {
    return generateStyleFromPropertyAndObject(propertyOrRecord, object)
  }

  return generateStyleFromRecord(propertyOrRecord)
}
