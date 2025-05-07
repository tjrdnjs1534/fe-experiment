// reset.css.ts
import { globalStyle } from '@vanilla-extract/css'

import * as layers from './layers.css'

/**
 * 기본 reset css
 */
globalStyle('*, *::before, *::after', {
  '@layer': {
    [layers.reset]: {
      boxSizing: 'border-box',
    },
  },
})

globalStyle('html', {
  '@layer': {
    [layers.reset]: {
      MozTextSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none',
      textSizeAdjust: 'none',
      fontSize: '16px',
      width: '100%',
      height: '100%',
    },
  },
  '@media': {
    '(max-width: 320px)': {
      fontSize: '9px',
    },
  },
})

globalStyle('#app', {
  height: '100%',
})

globalStyle('#page', {
  height: '100%',
})

globalStyle('.content', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '0 2.4rem',
})

globalStyle('body, input, textarea, select, button, table', {
  fontFamily: '"Spoqa Han Sans Neo", sans-serif',
  color: '#333',
})

globalStyle(
  `
  body, div, p, span, h1, h2, h3, h4, h5, h6,
  ul, ol, li, dl, dt, dd,
  table, th, td, form, fieldset, legend, button
  input, textarea, button, select,
  header, footer, main, article, section, aside
  `,
  {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  }
)

globalStyle('img, fieldset', {
  border: 0,
})

globalStyle('a', {
  color: '#333',
  textDecoration: 'none',
})

globalStyle('a:active, a:hover, a:focus', {
  color: '#333',
})

globalStyle('input, select, textarea', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  borderRadius: 0,
})

globalStyle('input[type=checkbox], input[type=radio]', {
  overflow: 'hidden',
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  clip: 'rect(0, 0, 0, 0)',
  border: 0,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  borderRadius: 0,
})

globalStyle('input:disabled, input:read-only:not(select)', {
  color: '#888',
  borderBottomColor: '#ccc',
  backgroundColor: 'transparent',
})

globalStyle('input::placeholder', {
  color: '#ccc',
})

globalStyle(
  `
  input::-ms-clear,
  input::-ms-reveal,
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration,
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
  `,
  {
    display: 'none',
    width: 0,
    height: 0,
    margin: 0,
  }
)

globalStyle('input[type=number]', {
  MozAppearance: 'textfield',
})

globalStyle('button', {
  border: 0,
  borderRadius: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

globalStyle('ul, ol', {
  listStyle: 'none',
})

globalStyle('table', {
  borderCollapse: 'collapse',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: 'normal',
})

globalStyle('b, strong', {
  fontWeight: 500,
})

globalStyle('hr', {
  margin: 0,
})

globalStyle(':focus', {
  outline: 0,
  outlineColor: 'transparent',
  outlineStyle: 'none',
})

globalStyle('html', {})
