import React, { useState } from 'react'
import { AllGames } from './components/AllGames'
import { Container } from './components/Container'
import { GameBar } from './components/GameBar'
import { Header } from './components/Header'
import { MainScreen } from './components/MainScreen'
import { PopupMenu } from './components/PopupMenu'

const App: React.FC = () => {
  const [popUpMenuBool, setPopUpMenuBool] = useState(false)
  const [popUpMenuContent, setPopUpMenuContent] = useState({ title: '' })

  const updatePopUpMenu = (content: any) => {
    setPopUpMenuBool(!popUpMenuBool)
    setPopUpMenuContent(content)
  }

  return (
    <Container class='container'>
      {popUpMenuBool ? (
        <PopupMenu
          updatePopUpMenu={updatePopUpMenu}
          popUpContent={popUpMenuContent}
        />
      ) : null}
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
      <MainScreen updatePopUpMenu={updatePopUpMenu} />
    </Container>
  )
}

export default App
