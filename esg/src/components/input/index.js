import React from 'react'
import * as s from './style'

const Input = ({type, placeHolder, value, onChange}) => {
  return (
    <s.Input type={type} placeholder={placeHolder} value={value} onChange={onChange}/>
      
  )
}

export default Input;
