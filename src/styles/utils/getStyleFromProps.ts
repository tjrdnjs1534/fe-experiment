/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sprinkles, sprinkles } from '../sprinkles.css'

type KnownSprinkleKeys = keyof Sprinkles

function isKnownSprinkleKey(key: string, atom: typeof sprinkles): key is KnownSprinkleKeys {
  return atom.properties.has(key as KnownSprinkleKeys)
}

export function getStyleFromProps<T extends Record<string, any>>(
  props: T,
  atom: typeof sprinkles = sprinkles
): { classNames: string[]; restProps: Omit<T, keyof typeof atom> } {
  const classNames: string[] = []
  const restProps: Record<string, any> = {}

  Object.entries(props).forEach(([key, value]) => {
    if (isKnownSprinkleKey(key, atom)) {
      classNames.push(atom({ [key]: value }))
    } else {
      restProps[key] = value
    }
  })

  return {
    classNames,
    restProps: restProps as Omit<T, keyof typeof atom>,
  }
}
