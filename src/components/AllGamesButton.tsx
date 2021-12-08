import React from 'react'

import gameLibraryImage from '../assets/games.png'

export const AllGames = (): React.ReactElement => {
  return (
    <header className='allgames'>
      <figure className='all-games-btn'>
        <img src={gameLibraryImage} alt='games-icon' />
        <p>ALL GAMES</p>
      </figure>
    </header>
  )
}
