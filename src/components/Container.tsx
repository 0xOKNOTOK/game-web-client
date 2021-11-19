import React, { ReactElement } from 'react'

export const Container: React.FC = ({ children }): ReactElement => {
  return <section className='container'>{children}</section>
}
