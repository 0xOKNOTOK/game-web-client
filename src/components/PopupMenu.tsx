import React from 'react'
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
        <Container class='popup-header'>
          <h1>Settings</h1>
          <button className='btn-close' onClick={handleCloseButton}>
            X
          </button>
        </Container>

        <form></form>
      </Container>
    </Container>
  )
}
