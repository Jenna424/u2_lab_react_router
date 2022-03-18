import React from 'react'
import genresArray from '../data/genres'
import { useState, useEffect } from 'react'

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    setGenres(genresArray)
  }, [])

  return (
    <div>
      <h1>Genres</h1>
      {genres.map(genre => (
        <div key={genre.id}>
          <h3>{genre.name}</h3>
          <img src={genre.image_background} alt={`${genre.name} image`} />
        </div>
      ))}
    </div>
  )
}

export default Genres