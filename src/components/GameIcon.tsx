import React from 'react'

interface Props {
  name: string
  image: string
}

export const GameIcon: React.FC<Props> = ({ name, image }) => {
  return (
    <figure>
      <img className='gameicon' src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}
