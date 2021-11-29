import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { Container } from './Container'

interface Props {
  updatePopUpMenu: Function
}

export const PopupMenu: React.FC<Props> = ({
  updatePopUpMenu,
}): React.ReactElement => {
  const handleCloseButton = (e: React.MouseEvent) => {
    e.preventDefault()
    updatePopUpMenu()
  }

  return (
    <Container class='popup-container'>
      <Container class='popup-menu'>
        <h1>Settings</h1>
        <button onClick={handleCloseButton}>X</button>
        <form></form>
      </Container>
    </Container>
  )
}
