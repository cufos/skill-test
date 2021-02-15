import React, {useEffect,useState} from 'react'
import {getUsers} from '../utils/login'

export default function Users({token}) {
  const [users,SetUsers] = useState([])
  useEffect(() => {
    getUsers(token).then(data => {
      SetUsers(data.data)
    })
  },[token])
  return (
    <div>
      {users && users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </div>
  )
}
