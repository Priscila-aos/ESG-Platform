import React from 'react'
import * as s from './style'



const Button = ({text, onClick, type='button'}) => {
  return (
    <s.Button type = {type} onClick={onClick}>
        {text}
    </s.Button>
  )
}

export default Button;

