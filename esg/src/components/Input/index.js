import React from 'react'
import * as s from './style'

const Input = React.forwardRef(({
  type = 'text',
  placeholder = '', 
  value,
  onChange,
  ...rest
}, ref) => {
  return (
      <s.Input
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          {...rest}
      />
  );
});

export default Input;
