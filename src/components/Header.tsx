import React from 'react'

interface User {
  userName: string
  userNotifications: number
  userBalance: number
  userAvatar?: string
}

interface Props {
  user: User
}

export const Header: React.FC<Props> = ({ user }): React.ReactElement => {
  return (
    <header className='brand'>
      <main className='topbar'>
        <h3>Gameyo</h3>
        <span className='userDetails'>
          <button>${user.userBalance}</button>
          <button>{user.userNotifications}</button>
          <button>{user.userName}</button>
        </span>
      </main>
    </header>
  )
}
