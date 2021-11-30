import React from 'react'

import logo from '../assets/logo.png'

interface User {
  userName: string
  userNotifications: number
  userBalance: number
  userAvatar?: string
  userLocation: string
}

interface Props {
  user: User
}

export const Header: React.FC<Props> = ({ user }): React.ReactElement => {
  return (
    <header className='brand'>
      <main className='topbar'>
        <img src={logo} alt='Gameyo logo.' />
        <span className='userDetails'>
          <button>{user.userLocation}</button>
          <button>${user.userBalance}</button>
          <button>{user.userNotifications}</button>
          <button>{user.userName}</button>
        </span>
      </main>
    </header>
  )
}
