import { style } from '@vanilla-extract/css'

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  minWidth: 0,
  boxSizing: 'border-box',
  font: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
})

const a = style({
  color: 'inherit',
  lineHeight: 0,
  textDecoration: 'none',
})

const button = style({
  background: 0,
  border: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

const block = style({
  display: 'block',
})

const body = style({
  lineHeight: 1,
})

const image = style({
  width: 'auto',
  height: 'auto',
})

const list = style({
  listStyle: 'none',
})

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
})

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

const mark = style({
  backgroundColor: 'transparent',
  color: 'inherit',
})

const select = style({
  appearance: 'none',
  selectors: {
    '&::-ms-expand': {
      display: 'none',
    },
  },
})

const swiperContainer = style({
  width: '100%',
  height: '100%',
})

export const element = {
  a,
  article: block,
  aside: block,
  button,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  image,
  menu: block,
  nav: block,
  section: block,
  textarea: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  table,
  mark,
  select,
  swiperContainer,
}
