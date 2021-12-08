import React, { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
  class: string
}

export const Container = (props: Props): ReactElement => {
  return <section className={props.class}>{props.children}</section>
}
