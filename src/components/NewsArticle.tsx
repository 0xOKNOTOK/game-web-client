import React from 'react'
import { Container } from './Container'
import newsTemplate from '../assets/news.jpg'
import { ButtonLarge } from './ButtonLarge'

export const NewsArticle = (): React.ReactElement => {
  const handleArticleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }
  return (
    <Container class='news-article'>
      <img src={newsTemplate} alt='Mount' />
      <figcaption>
        <h4>Shadowlands: Watch the Eternity’s End Developer Preview</h4>
        <p>
          Zovaal, the elusive Jailer and ruler of the Maw in the Shadowlands,
          has made his next move—and with it, he threatens to rewrite the rules
          of reality.
        </p>
        <ButtonLarge buttonLabel='Learn More...' onClick={handleArticleClick} />
      </figcaption>
    </Container>
  )
}
