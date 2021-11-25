import React from 'react'
import { Container } from './Container'

export const NewsArticle: React.FC = (): React.ReactElement => {
  return (
    <Container class='news-article'>
      <img />
      <figcaption>
        <h4>Update 1.0.3</h4>
        <p>New mounts, items and raids! View the latest patch notes at...</p>
      </figcaption>
    </Container>
  )
}
