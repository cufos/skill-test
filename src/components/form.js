import React, {useState} from 'react'
import {login, refresh} from '../utils/login'

export default function Form({setToken}) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    login(username,password).then(data => {
      setToken(data.data.accessToken)
      setUsername('')
      setPassword('')
      localStorage.setItem('bearer', JSON.stringify(data.data.accessToken))
      localStorage.setItem('refresh-bearer', JSON.stringify(data.data.refreshToken))
    })
  }

  function handleRefresh(e){
    e.preventDefault()

    refresh()
  }

  return (
    <div>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
        </label>

        <label>
          Password
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
        </label>
        <button>
          Submit
        </button>
      </form>

      <button onClick={handleRefresh}>
        refresh token
      </button>
    </div>
  )
}
