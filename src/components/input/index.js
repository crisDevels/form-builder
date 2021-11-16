import React from 'react'

export const Input = ({ type, value, placeholder, disabled = false }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled ? 'true' : 'false'}
  />
)

export const Select = ({ options, value }) => (
  <select value={value}>
    {options.map((option, i) => {
      return (
        <option key={i}>
          {option.text}
        </option>
      )
    })}
  </select>
)
