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
          <p>${user.userBalance}</p>
          <p>{user.userNotifications}</p>
          <p>{user.userName}</p>
        </span>
      </main>
    </header>
  )
}
