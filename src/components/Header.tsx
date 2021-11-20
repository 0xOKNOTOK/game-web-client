import React from 'react'

interface User {
  userName: string
  userNotifications: number
  userBalance: number
  userAvatar?: string
}

export const Header: React.FC<User> = props => {
  return (
    <header className='brand'>
      <main className='topbar'>
        <h3>Gameyo</h3>
        <span className='userDetails'>
          <p>{props.userBalance}</p>
          <p>{props.userNotifications}</p>
          <p>{props.userName}</p>
        </span>
      </main>
    </header>
  )
}
