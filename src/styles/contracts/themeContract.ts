import { createThemeContract } from '@vanilla-extract/css'
import { tokens } from '../tokens/tokens'
import { createNullObject } from '../utils/createNullObject'

export const themeContract = createThemeContract(createNullObject(tokens))
