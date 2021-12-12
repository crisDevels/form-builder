import { useMutation } from '@apollo/client'
import React from 'react'
import { setLikedPhoto } from '../../hoc/mutationPhotos'

const ButtonLiked = ({ likes, changeLiked, loading, error, data }) => {
  if (loading) return '...'
  if (error) return '!'

  return (
    <button onClick={changeLiked}>
      ❤️ {data ? data.likeAnonymousPhoto.likes : likes}
    </button>
  )
}

export const PhotoCard = ({
  id,
  categoryId,
  src,
  likes,
  userId,
  liked
}) => {
  const [newLiked, { data, loading, error }] = useMutation(setLikedPhoto)

  const changeLiked = () => {
    newLiked({
      variables: {
        input: {
          id
        }
      }
    })
  }

  return (
    <li>
      <a href={`/?detail=${id}`}>
        <img
          src={src}
          alt={`Category ${categoryId} ${id}`}
          title={`Category ID ${id}`}
          width='100'
          height='auto'
        />
      </a>
      <ButtonLiked
        id={id}
        likes={likes}
        loading={loading}
        error={error}
        data={data}
        changeLiked={changeLiked}
      />
    </li>
  )
}
