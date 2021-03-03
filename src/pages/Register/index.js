import React from 'react'
import { RegisterBackground } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBackground} className="bg-image"/>
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Name" placeholder="John Doe" type="text" />
        <Gap height={12} />
        <Input label="Email" placeholder="johndoe@gmail.com" type="email" /> 
        <Gap height={12} />
        <Input label='password' placeholder="password" type="password" />
        <Gap height={20} />
        <Button title="Register" type="submit" />
        <Link title='Kembali ke Halaman Login' />
      </div>
    </div>
  )
}

export default Register
