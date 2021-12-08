import React from 'react'

interface Props {
  buttonLabel: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonLarge = (
  {
    buttonLabel,
    onClick
  }: Props
) => {
  return (
    <button className='btn-large' onClick={onClick}>
      {buttonLabel}
    </button>
  )
}
