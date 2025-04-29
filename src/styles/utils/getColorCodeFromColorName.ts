import type { Colors } from '../tokens/colors'
import { colorValues, colors } from '../tokens/colors'

export function getColorCodeFromColorName(colorName?: Colors) {
  if (colorName && colorValues.includes(colorName)) {
    return colors[colorName]
  }

  return undefined
}
