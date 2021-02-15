import React, { useEffect, useState } from 'react'
import { getUsers } from '../utils/login'
import Nav from './nav'
import { navigate } from '@reach/router'

export default function Users({ setId, token }) {
  const [users, SetUsers] = useState([])
  useEffect(() => {
    getUsers(token).then(data => {
      SetUsers(data?.data)
    })
  }, [token])

  const handleUpdateUser = (id) => {
    navigate(`/user/${id}`)
  }

  return (
    <div>
      <Nav />
      {users && users.map(user => (
        <li key={user.id}>
          {user.username}
          {setId(user.id)}
          <button onClick={() => handleUpdateUser(user.id)}>edit</button>
        </li>
      ))}
    </div>
  )
}
