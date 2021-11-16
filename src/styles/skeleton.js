import styled, { css } from 'styled-components'

const skeletonStyle = ({
  width = '100',
  heigth = '100'
} = {}) => css`
  width: ${width}%;
  height: ${heigth}%;
  background-color: #F2F2F2;
  border-radius: 2px;
`

export const Skeleton = styled.span`
  ${({ width }) => skeletonStyle({ width })}
`
