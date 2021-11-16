import React from 'react'
import { Skeleton } from '../../styles/skeleton'
import { Nav } from './styles'

export const NavBar = ({ name, loading = false }) => {
  return (
    <Nav>
      <div>
        {loading
          ? <Skeleton width={100} />
          : <span>My workspace / {name}</span>}
      </div>
      <ul>
        <li>Create</li>
        <li>Results</li>
      </ul>
      <button>
        SAVE
      </button>
    </Nav>
  )
}
