import React from 'react'

interface Props {
  buttonLabel: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonIcon: React.FC<Props> = ({ buttonLabel, onClick }) => {
  return (
    <button className='btn-icon' onClick={onClick}>
      {buttonLabel}
    </button>
  )
}
