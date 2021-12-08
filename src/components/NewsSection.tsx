import React from 'react'
import { Container } from './Container'
import { NewsArticle } from './NewsArticle'

export const NewsSection = (): React.ReactElement => {
  return (
    <Container class='news-section'>
      <h2>Latest News</h2>
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
    </Container>
  )
}
