import React from 'react'
import settingsIcon from '../assets/settings.svg'
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

export const ButtonIcon = (
  {
    onClick,
    children
  }: Props
) => {
  return (
    <button className='btn-icon' onClick={onClick}>
      <img src={settingsIcon} alt='settings icon' />
    </button>
  )
}
