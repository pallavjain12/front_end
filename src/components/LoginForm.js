import React, { useState } from 'react'

const LoginForm = ({ startLogin }) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    const credentials = {
      email, password
    }

    startLogin(credentials)

    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={handleLogin} id='login-form'>
      <input 
        type='email'
        placeholder='Email'
        value={email}
        onChange={event => setEmail(event.target.value)}
        id='email'
        required
      />
        
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
        id='password'
        required
      />

      <button type='submit' id='login-submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm
