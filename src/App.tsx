import React from 'react'
import { AllGames } from './components/AllGames'
import { Container } from './components/Container'
import { GameBar } from './components/GameBar'
import { Header } from './components/Header'
import { MainScreen } from './components/MainScreen'

const App: React.FC = () => {
  return (
    <Container class='container'>
      <Header
        user={{
          userName: 'rossgr',
          userBalance: 20,
          userNotifications: 2,
          userLocation: 'UK',
        }}
      />
      <section className='gamebar-parent'>
        <AllGames />
        <GameBar />
      </section>
      <MainScreen />
    </Container>
  )
}

export default App
