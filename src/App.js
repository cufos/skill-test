import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import Nav from './components/nav';
import {Router} from '@reach/router'
import Users from './components/Users';

function App() {
  const [token,setToken] = useState('')
  return (
    <div className="App">
      <Nav />
     <Form setToken={setToken} />
    <Router>
      <Users token={token} path='/users'/>
    </Router>
    </div>
  );
}

export default App;
