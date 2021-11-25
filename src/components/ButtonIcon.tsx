import React from 'react'
import settingsIcon from '../assets/settings.svg'
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonIcon: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button className='btn-icon' onClick={onClick}>
      <img src={settingsIcon} alt='settings icon' />
    </button>
  )
}
