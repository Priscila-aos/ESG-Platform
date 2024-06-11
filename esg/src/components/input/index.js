import React from 'react'
import * as s from './style'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <s.Input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
      
  )
}

export default Input;
