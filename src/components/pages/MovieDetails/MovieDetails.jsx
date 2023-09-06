import React from 'react'
import { Link } from 'react-router-dom'
export const MovieDetails = () => {
  return (
    <>
    <Link to='/movies/:movieId'>MovieDetails</Link>
     <Link to='cast'>Cast</Link>
     <Link to='reviews'>Reviews</Link></>
  )
}
