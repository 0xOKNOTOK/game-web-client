import React from 'react'
import { Container } from './Container'
import { FriendCard } from './FriendCard'

export const FriendsList: React.FC = (): React.ReactElement => {
  return (
    <Container class='friends-list'>
      <h2>Friends</h2>
      <ul>
        <li>
          <FriendCard
            friend={{ username: 'Moo', image: 'Hi', status: 'online' }}
          />
        </li>
      </ul>
    </Container>
  )
}
