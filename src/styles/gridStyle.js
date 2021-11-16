import { css } from 'styled-components'

export const GridStyle = ({ columnTemplate = '1fr 2fr 1fr' } = {}) => css`
  display: grid;
  grid-template-columns: ${columnTemplate};
`
