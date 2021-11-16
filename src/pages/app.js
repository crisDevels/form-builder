import React, { useState } from 'react'
import { Builder } from '../components/builder'
import { ListSlideResume } from '../components/ListSlide'
import { NavBar } from '../components/navbar'
import { Preview } from '../components/preview'
import { useRequest } from '../services'
import { GlobalStyles, Grid } from './global'

export const App = () => {
  const [currentSlide, setCurrentSlide] = useState({})
  const [objectSlides, setObjectSlides] = useState([])
  const [index, setIndex] = useState(1)

  const { response, loading, error } = useRequest({
    url: 'https://practices-react-entornointeractivo.vercel.app/form',
    other: { name: '', slides: [] },
    setCurrentSlide,
    setObjectSlides
  })

  const { welcome, slides, name } = response

  const clickSlide = (e) => {
    const idClick = Number(e.target.dataset.id)
    const current = objectSlides.filter(slide => slide.id === idClick)[0]
    const index = objectSlides.indexOf(current)
    setIndex(index)
    setCurrentSlide(current)
  }

  const addOption = (e) => {
    const newOptions = Object.keys(currentSlide).includes('options')
      ? [...currentSlide.options, { text: 'Edit new option' }]
      : [{ text: 'Edit new option' }]

    setCurrentSlide({
      ...currentSlide,
      options: newOptions
    })
  }

  const handleCurrentSlide = (e) => {
    const { name, value, dataset } = e.target
    if (name.indexOf('options') !== -1) {
      setCurrentSlide({
        ...currentSlide,
        options: [
          ...currentSlide.options,
          currentSlide.options[dataset.key].text = value]
      })
    }
    setCurrentSlide({
      ...currentSlide,
      [name]: value
    })
  }

  if (error) return `Ups ! We have error ${error}`
  return (
    <>
      <GlobalStyles />
      <NavBar
        name={name}
        loading={loading}
      />
      <Grid>

        <ListSlideResume
          slides={slides}
          welcome={welcome || null}
          clickSlide={clickSlide}
        />

        <Preview
          index={index}
          slide={currentSlide}
          loading={loading}
        />

        <Builder
          slide={currentSlide}
          loading={loading}
          handle={handleCurrentSlide}
          addOption={addOption}
        />

      </Grid>
    </>
  )
}
