import React from 'react'
import { Container } from './components/Container'
import { GameBar } from './components/GameBar'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <Container class='container'>
      <Header
        user={{ userName: 'rossgr', userBalance: 20, userNotifications: 2 }}
      />
      <GameBar />
    </Container>
  )
}

export default App
