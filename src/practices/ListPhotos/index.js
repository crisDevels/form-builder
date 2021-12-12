import { useQuery } from '@apollo/client'
import React from 'react'
import { getPhotos } from '../../hoc/getPhotos'
import { PhotoCard } from '../photoCard'

export const ListPhotos = ({ categoryId }) => {
  const { loading, error, data = null } = useQuery(getPhotos, {
    variables: { categoryId }
  })

  if (loading) return '...'
  if (error) return `${error}`
  const { photos } = data

  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
