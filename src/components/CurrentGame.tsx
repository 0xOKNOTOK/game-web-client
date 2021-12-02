import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { ButtonLarge } from './ButtonLarge'
import { Container } from './Container'
import wowWotlk from '../assets/wow_wotlk_placeholder.png'
import { Input } from './Input'
import tempImage from '../assets/settings.svg'

interface Props {
  game: Game
  updatePopUpMenu: Function
}

interface Game {
  name: string
  version: string
  logo: string
}

export const CurrentGame: React.FC<Props> = ({
  game,
  updatePopUpMenu,
}): React.ReactElement => {
  const handleSettingsButtonClick = (e: React.MouseEvent) => {
    const content = {
      title: 'Chicken',
    }
    e.preventDefault()
    updatePopUpMenu(content)
  }

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    const content = {
      title: 'Launch',
    }
    updatePopUpMenu(content)
    e.preventDefault()
  }

  return (
    <div>
      <Container class='current-game'>
        <div className='game-play-top'>
          <img src={wowWotlk} alt='Current game logo.' />
          <ul>
            <li>
              <img src={tempImage} alt='shop' />
              <a href='/l'>Shop</a>
            </li>
            <li>
              <img src={tempImage} alt='shop' />
              <a href='/s'>Forums</a>
            </li>
            <li>
              <img src={tempImage} alt='shop' />
              <a href='/k'>Patch Notes</a>
            </li>
          </ul>
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
            <ButtonLarge buttonLabel='Play' onClick={handlePlayButtonClick} />
            <ButtonIcon onClick={handleSettingsButtonClick}></ButtonIcon>
          </span>
          <p>
            Version: <strong>{game.version}</strong>
          </p>
        </div>
      </Container>
    </div>
  )
}
