import styled, { createGlobalStyle, css } from 'styled-components'

export const GridStyle = ({ columnTemplate = '1fr 2fr 1fr' } = {}) => css`
  display: grid;
  grid-template-columns: ${columnTemplate};
`

export const Grid = styled.div`
  ${GridStyle()}
`

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body, ul {
    margin: 0;
    padding: 0;
  }
`
