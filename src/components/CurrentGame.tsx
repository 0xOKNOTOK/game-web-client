import React from 'react'
import { ButtonLarge } from './ButtonLarge'
import { Container } from './Container'

export const CurrentGame: React.FC = (): React.ReactElement => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <Container class='news-section'>
      <h2>GAME_ICON</h2>
      <p>Game</p>
      <ButtonLarge buttonLabel='Play' onClick={handleButtonClick} />
    </Container>
  )
}
