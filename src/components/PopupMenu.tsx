import React from 'react'
import { Container } from './Container'

export const PopupMenu: React.FC = (): React.ReactElement => {
  return (
    <Container class='popup-container'>
      <Container class='popup-menu'>
        <h1>Settings</h1>
        <form></form>
      </Container>
    </Container>
  )
}
