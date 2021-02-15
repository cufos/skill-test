import React, {useState} from 'react'
import {login} from '../utils/login'

export default function Form({setToken}) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    login(username,password).then(data => {
      console.log(data.data)
      setToken(data)
    })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  )
}
