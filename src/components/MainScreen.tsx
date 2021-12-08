import React from 'react'
import { Container } from './Container'
import { CurrentGame } from './CurrentGame'
import { FriendsList } from './FriendsList'
import { NewsSection } from './NewsSection'

interface Props {
  updatePopUpMenu: Function
}

export const MainScreen = (
  {
    updatePopUpMenu
  }: Props
): React.ReactElement => {
  return (
    <Container class='main'>
      <CurrentGame
        updatePopUpMenu={updatePopUpMenu}
        game={{
          name: 'World Of Warcraft',
          version: '9.2.1',
          logo: 'https://example.com',
        }}
      />
      <NewsSection />
      <FriendsList />
    </Container>
  )
}
