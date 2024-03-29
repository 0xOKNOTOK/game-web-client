import React from 'react'

interface Props {
  versions: Versions
  class: string
}

interface Versions {
  basegame: string
  beta?: string
  additional?: string
}

export const Input = (props: Props) => {
  return (
    <select className={props.class}>
      <option value={props.versions.basegame}>
        WoW {props.versions.basegame}
      </option>
      <option value={props.versions.additional}>
        WoW {props.versions.additional}
      </option>
      <option value={props.versions.beta}>WoW {props.versions.beta}</option>
    </select>
  )
}
