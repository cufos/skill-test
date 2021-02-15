import React from 'react'
import Form from '../components/form'
import Nav from '../components/nav'

export default function Home({ setToken}) {
  return (
    <>
      <Nav />
      <Form setToken={setToken} />
    </>
  )
}
