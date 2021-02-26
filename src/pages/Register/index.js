import React from 'react'
import { RegisterBackground } from '../../assets'
import './register.scss'

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBackground} className="bg-image"/>
      </div>
      <div className="right">
        form
      </div>
    </div>
  )
}

export default Register
