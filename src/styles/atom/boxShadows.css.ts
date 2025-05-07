import { colors } from '../tokens/colors'
import generateStyleFromObject from '../utils/generateStylesFromObject'

const boxShadows = {
  cardUi: `0px 4px 20px 0px ${colors.cardUiShadow}`,
  default: `2px 6px 16px 0px ${colors.defaultShadow}`,
  toolTip: `5px 6px 12px 0px ${colors.toolTipShadow}`,
  toast: `0px 8px 16px 0px ${colors.toastShadow}`,
  chip: `0px 4px 8px 0px ${colors.chipShadow}`,
} as const

const styles = generateStyleFromObject('boxShadow', boxShadows)
export default styles
