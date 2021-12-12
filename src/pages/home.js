import React, { useEffect, useState } from 'react'
import { ListPhotos } from '../practices/ListPhotos'
import PhotoDetail from '../practices/PhotoDetail'

function home () {
  const [idPhoto, setIdPhoto] = useState(null)

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search)
    const newIdPhoto = urlParam.get('detail')
    setIdPhoto(newIdPhoto)
  }, [])

  return (
    <>
      {
        idPhoto
          ? <PhotoDetail id={idPhoto} />
          : <ListPhotos categoryId={3} />
      }
    </>
  )
}

export default home
