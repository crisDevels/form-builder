import styled, { createGlobalStyle } from 'styled-components'
import { GridStyle } from '../styles/gridStyle'

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
