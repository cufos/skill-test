import React from 'react'
import { Link } from '@reach/router'

export default function Nav() {
  return (
    <nav>
      <li>
        <Link to='/users'>Users</Link>
      </li>
      <li>
        <Link to='/users/:id'>Update User</Link>
      </li>
    </nav>
  )
}
