import React from 'react'
import { Link } from '@reach/router'

export default function Nav() {
  return (
    <nav className='navigation'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        <Link to='/user/:id'>Update User</Link>
      </li>
    </nav>
  )
}
