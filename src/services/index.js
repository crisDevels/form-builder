import axios from 'axios'
import { useEffect, useState } from 'react'

export function useRequest ({ url, other, setCurrentSlide, setObjectSlides }) {
  const [response, setRes] = useState(other)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const newObjectSlides = (data) => {
    const newSlides = []
    const slides = data.slides
    const welcome = data.welcome

    newSlides.push(welcome, ...slides)
    return newSlides
  }

  const getData = () => {
    setLoading(true)
    axios({ url: url })
      .then((res) => {
        setLoading(false)
        setRes(res.data)
        setCurrentSlide(res.data.welcome || {})
        /* data slides */
        const newSlides = newObjectSlides(res.data)
        setObjectSlides(newSlides)
      }).catch(e => {
        setError(e)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return { response, loading, error }
}
