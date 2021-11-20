import React from 'react'
import { AllGames } from './components/AllGames'
import { Container } from './components/Container'
import { GameBar } from './components/GameBar'
import { Header } from './components/Header'

const App: React.FC = () => {
  return (
    <Container class='container'>
      <Header
        user={{ userName: 'rossgr', userBalance: 20, userNotifications: 2 }}
      />
      <section className='gamebar-parent'>
        <AllGames />
        <GameBar />
      </section>
    </Container>
  )
}

export default App
