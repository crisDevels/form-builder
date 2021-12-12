import React from 'react'
import { useQuery } from '@apollo/client'
import { getPhotoId } from '../../hoc/getPhotos'
import { PhotoCard } from '../photoCard'

function PhotoDetail ({ id }) {
  const { loading, error, data } = useQuery(getPhotoId, {
    variables: { id }
  })
  if (loading) return '...'
  if (error) return `${error}`
  const { photo } = data

  return (
    <PhotoCard {...photo} />
  )
}

export default PhotoDetail
