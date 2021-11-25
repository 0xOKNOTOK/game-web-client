import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { ButtonLarge } from './ButtonLarge'
import { Container } from './Container'

interface Props {
  game: Game
}

interface Game {
  name: string
  version: string
  logo: string
}

export const CurrentGame: React.FC<Props> = ({ game }): React.ReactElement => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <Container class='current-game'>
        <h2>GAME_ICON</h2>

        <div className='game-play-bottom'>
          <h4>{game.name}</h4>
          <span className='btn-wrapper'>
            <ButtonLarge buttonLabel='Play' onClick={handleButtonClick} />
            <ButtonIcon onClick={handleButtonClick}></ButtonIcon>
          </span>
          <p>Version: {game.version}</p>
        </div>
      </Container>
    </div>
  )
}
