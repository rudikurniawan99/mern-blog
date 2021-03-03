import React from 'react'
import './button.scss'

function Button({title, ...rest}) {
  return (
    <div>
      <button {...rest}>{title}</button> 
    </div>
  )
}

export default Button
