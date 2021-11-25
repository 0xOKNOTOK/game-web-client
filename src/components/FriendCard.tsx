import React from 'react'
import { Container } from './Container'

interface Props {
  friend?: Friend
}

interface Friend {
  username: string
  image: string
  status: string
}

export const FriendCard: React.FC<Props> = ({ friend }) => {
  return (
    <Container class='friend-card'>
      <img src='' />
      <h4>moo</h4>
      <p>Current Status</p>
    </Container>
  )
}
