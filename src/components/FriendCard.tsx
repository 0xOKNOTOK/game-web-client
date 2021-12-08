import React from 'react'
import { Container } from './Container'

import tempProfilePic from '../assets/pfp.jpg'

interface Props {
  friend?: Friend
}

interface Friend {
  username: string
  image: string
  status: string
}

export const FriendCard = (
  {
    friend
  }: Props
) => {
  return (
    <Container class='friend-card'>
      <img src={tempProfilePic} alt='Profile' />
      <Container class='friend-name'>
        <h3>moo</h3>
        <p>Current Status</p>
      </Container>
    </Container>
  )
}
