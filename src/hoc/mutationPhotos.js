import { gql } from 'apollo-boost'

export const setLikedPhoto = gql`
  mutation likedPhoto($input: LikePhoto! = { id: "2" }) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
