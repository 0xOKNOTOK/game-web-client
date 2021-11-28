import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { ButtonLarge } from './ButtonLarge'
import { Container } from './Container'
import wowWotlk from '../assets/wow_wotlk_placeholder.png'
import { Input } from './Input'

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
        <div className='game-play-top'>
          <img src={wowWotlk} alt='Current game logo.' />
        </div>

        <div className='game-play-bottom'>
          <Input
            class='version-selector'
            versions={{
              basegame: 'Retail',
              beta: 'Beta',
              additional: 'Classic',
            }}
          />
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
