import React from 'react'
import { Company } from './Company'
import { Container } from './Container'
import { StoreGame } from './StoreGame'

export const AllGames = () => {
  return (
    <Container class='all-games'>
      <h1>All Games</h1>
      <Container class='companies'>
        <Company />
        <Company />
      </Container>
      <Container class='store-games'>
        <StoreGame />
        <StoreGame />
        <StoreGame />
      </Container>
    </Container>
  )
}
