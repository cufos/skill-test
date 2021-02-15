import axios from 'axios'
const loginUrl = 'http://79.26.34.212:8000/login'
const body = { "username": "john", "password": "password123admin" }
const refreshToken = 'http://79.26.34.212:8000/token'
const userUrl = 'http://79.26.34.212:8000/users'
const singleUserUrl = 'http://79.26.34.212:8000/users/id'

export const login = (username,password) => {
  return axios.post(loginUrl,{username,password}).then(result => {
    return result
  })
}

export const getUsers = (token) => {
  return axios.get(userUrl,{
    headers:{
      'Authorization': token.accessToken
    }
  }).then(result => {
    console.log(result)
  })
}