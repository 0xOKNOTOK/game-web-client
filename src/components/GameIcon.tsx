import React from 'react'

interface Props {
  name: string
  image: string
  class: string
}

export const GameIcon: React.FC<Props> = props => {
  return (
    <figure>
      <img className={props.class} src={props.image} alt={props.name} />
    </figure>
  )
}
