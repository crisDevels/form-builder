import React from 'react'

export const Slide = ({ id, text, type }) => (
  <li data-id={id} key={id}>
    <span>{type}</span>
    {text}
  </li>
)
