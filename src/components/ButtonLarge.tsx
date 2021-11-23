import React from 'react'

interface Props {
  buttonLabel: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonLarge: React.FC<Props> = ({ buttonLabel, onClick }) => {
  return (
    <button className='btn-large' onClick={onClick}>
      {buttonLabel}
    </button>
  )
}
