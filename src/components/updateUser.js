import React, { useState } from 'react'
import Nav from './nav'
import { updateUser } from '../utils/login'
import { navigate } from '@reach/router'

export default function UpdateUser({id}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(id,username, password).then(data => console.log(data)).catch(err => console.log(err))

    navigate('/')
  }
  return (
    <div>
      <Nav />
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
        </label>

        <label>
          Password
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}
