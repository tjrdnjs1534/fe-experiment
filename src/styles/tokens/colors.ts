export const colors = {
  // Primary Color
  blue050: '#EBF0FF',
  blue100: '#DAE2FF',
  blue200: '#91A8FF',
  blue300: '#476EFF',
  blue400: '#0046FF',
  blue500: '#143898',

  // Sub Color
  red050: '#FFEBEB',
  red100: '#FFCCCC',
  red200: '#FF847F',
  red300: '#FF4B44',
  red400: '#DA1D1D',
  red500: '#AF0000',
  orange050: '#FFEBE6',
  orange100: '#FFC7BA',
  orange200: '#FF866A',
  orange300: '#F85F3C',
  orange400: '#F1461F',
  orange500: '#C52500',
  yellow050: '#FFF6E3',
  yellow100: '#FFDC97',
  yellow200: '#FFC147',
  yellow300: '#FFA800',
  yellow400: '#E08600',
  yellow500: '#B16A00',
  green050: '#E0F4EF',
  green100: '#AEE7DA',
  green200: '#44CFAD',
  green300: '#17A381',
  green400: '#09634D',
  green500: '#004534',

  // Gray Color
  white: '#FFFFFF',
  bgLightGray: '#F8F8F8',
  bgWarmGray: '#F6F6F6',
  gray030: '#EEEEEE',
  gray040: '#DDDDDD',
  gray050: '#CCCCCC',
  gray060: '#AAAAAA',
  gray070: '#888888',
  gray080: '#666666',
  gray090: '#333333',
  black: '#000000',

  // Dark Blue
  dgray50: '#F4F7FC',
  dgray100: '#EDF0F8',
  dgray200: '#D4D8E5',
  dgray300: '#B3B8C9',
  dgray400: '#676D80',
  dgray500: '#494F60',
  dgray600: '#3D4964',
  dgray700: '#383B5A',
  dgray800: '#1B1F42',

  // Steel Blue
  bgSteelBlue: '#D0DAE6',
  steelBlue: '#91A1B2',

  // None Of Above
  defaultShadow: 'rgba(0, 0, 0, 0.2)',
  cardUiShadow: 'rgba(19, 87, 196, 0.14)',
  toolTipShadow: 'rgba(0, 0, 0, 0.3)',
  toastShadow: 'rgba(0, 0, 0, 0.4)',
  chipShadow: 'rgba(0, 0, 0, 0.08)',
} as const

export type Colors = keyof typeof colors

export const colorValues = Object.keys(colors)
