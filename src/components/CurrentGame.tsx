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
  gameLogo: string
}

export const CurrentGame: React.FC<Props> = ({ game }): React.ReactElement => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <Container class='current-game'>
      <h2>GAME_ICON</h2>
      <p>{game.name}</p>
      <span className='btn-wrapper'>
        <ButtonLarge buttonLabel='Play' onClick={handleButtonClick} />
        <ButtonIcon buttonLabel='SET' onClick={handleButtonClick} />
      </span>

      <p>Version: {game.version}</p>
    </Container>
  )
}
