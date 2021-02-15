import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router'
import Users from './components/Users';
import Home from './container/home';
import UpdateUser from './components/updateUser';

function App() {
  const [token, setToken] = useState('')
  const [id, setId] = useState()
  return (
    <div className="App">
      <Router>
        <Home setToken={setToken} path='/' />
        <Users setId={setId} token={token} path='/users' />
        <UpdateUser id={id} path='/user/:id' />
      </Router>


    </div>
  );
}

export default App;
