import React from 'react'
import { Slide } from '../slide'

export const ListSlideResume = ({ slides, welcome, clickSlide }) => {
  return (
    <ul onClick={clickSlide}>
      {welcome &&
        <Slide
          key={welcome.id}
          id={welcome.id}
          text={welcome.text}
          type={welcome.type}
        />}

      {slides.map(slide => (
        <Slide
          key={slide.id}
          id={slide.id}
          text={slide.answer}
          type={slide.type}
        />
      ))}
    </ul>
  )
}
