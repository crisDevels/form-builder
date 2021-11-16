import React from 'react'
import { Input, Select } from '../input'

const SlidePreview = ({ index = 0, principal, subPrincipal, button = 'GO', type, options = [] }) => {
  return (
    <div>
      <div>
        <p>{index + 1}. {principal}</p>
        <p>{subPrincipal}</p>

        {type !== 'welcome' && (
          type !== 'options'
            ? <Input
                type={type}
                value=''
                placeholder='Write your answer'
              />
            : <Select
                options={options}
              />
        )}
        <button type='button'>{button}</button>
      </div>
    </div>
  )
}

export const Preview = ({ slide, loading, index }) => {
  if (slide.type === 'welcome') {
    const { text, subtext, button, type } = slide
    return (
      <SlidePreview
        index={index}
        principal={text}
        subPrincipal={subtext}
        button={button}
        type={type}
      />
    )
  }

  const { answer, subtext, type, options = [] } = slide
  return (
    <SlidePreview
      index={index}
      principal={answer}
      subPrincipal={subtext}
      type={type}
      options={options}
    />
  )
}
