import React from 'react'
import { Container } from './Container'

export const FriendsList: React.FC = (): React.ReactElement => {
  return (
    <Container class='friends-list'>
      <h2>Friends</h2>
      <ul>
        <li>
          <span>
            <p>Dave</p>
          </span>
        </li>
      </ul>
    </Container>
  )
}
