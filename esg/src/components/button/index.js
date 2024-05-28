import React from 'react'
import * as s from './style'



const Button = ({Text, onClick, Type='button'}) => {
  return (
    <s.Button type = {Type} onClick={onClick}>
        {Text}
    </s.Button>
  )
}

export default Button;
