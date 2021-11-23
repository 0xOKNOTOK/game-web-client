import React from 'react'
import { Container } from './Container'

export const NewsArticle: React.FC = (): React.ReactElement => {
  return (
    <Container class='news-article'>
      <h2>Latest News</h2>
      <figure>
        <img />
        <figcaption>
          <h4>Update 1.0.3</h4>
          <p>New mounts, items and raids! View the blogpost here</p>
        </figcaption>
      </figure>
    </Container>
  )
}
