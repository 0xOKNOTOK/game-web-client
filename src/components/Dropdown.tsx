import React from 'react'
import { Container } from './Container'

export const Dropdown: React.FC = (): React.ReactElement => {
  return (
    <Container class='dropdown'>
      <section>
        <ul>
          <li>Account Settings</li>
          <li>Wallet</li>
          <li>Privacy Settings</li>
          <li>View Wishlist</li>
          <li>Redeem Code</li>
          <li>Log out</li>
        </ul>
      </section>
    </Container>
  )
}
