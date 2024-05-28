import React from 'react'
import * as s from './style'

const Input = ({Type, PlaceHolder, Value, onChange}) => {
  return (
    <s.Input type={Type} placeholder={PlaceHolder} value={Value} onChange={onChange}/>
      
  )
}

export default Input;
