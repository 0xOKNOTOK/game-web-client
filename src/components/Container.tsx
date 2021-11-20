import React, { ReactElement } from 'react'

interface Props {
  children: ReactElement
  class: string
}

export const Container: React.FC<Props> = (props): ReactElement => {
  return <section className={props.class}>{props.children}</section>
}
