import React from 'react';
import { useState, useEffect } from 'react'
import gamesArray from '../data/games.json'

const Games = () => {
  const [games, setGames] = useState([])
  // load games from JSON file when the component first mounts
  useEffect(() => {
    setGames(gamesArray)
  }, [])

  return (
    <div>
      <h1>Games</h1>
      {games.map(game => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <img src={game.background_image} alt={`${game.name} image`} />
          <p><b>Release Date</b>: {game.released}</p>
          <p><b>Rating</b>: {game.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Games