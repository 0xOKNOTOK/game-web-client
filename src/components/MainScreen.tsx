import React from 'react'
import { Container } from './Container'
import { CurrentGame } from './CurrentGame'
import { FriendsList } from './FriendsList'
import { NewsSection } from './NewsSection'

export const MainScreen: React.FC = (): React.ReactElement => {
  return (
    <Container class='main'>
      <CurrentGame />
      <NewsSection />
      <FriendsList />
    </Container>
  )
}
