import React from 'react'
import { Container } from './Container'
import { CurrentGame } from './CurrentGame'
import { FriendsList } from './FriendsList'
import { NewsSection } from './NewsSection'

export const MainScreen: React.FC = (): React.ReactElement => {
  return (
    <Container class='main'>
      <CurrentGame
        game={{
          name: 'World Of Warcraft',
          version: '9.2.1',
          gameLogo: 'https://example.com',
        }}
      />
      <NewsSection />
      <FriendsList />
    </Container>
  )
}
