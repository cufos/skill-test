import axios from 'axios'
const loginUrl = 'http://79.26.34.212:8000/login'
// const body = { "username": "john", "password": "password123admin" }
const refreshToken = 'http://79.26.34.212:8000/token'
const userUrl = 'http://79.26.34.212:8000/users'
const singleUserUrl = 'http://79.26.34.212:8000/users/'

export const login = (username,password) => {
  return axios.post(loginUrl,{username,password}).then(result => {
    return result
  }).catch(err => console.log(err))
}

export const getUsers = (token) => {
  return axios.get(userUrl,{
    headers:{
      Authorization: token ? `Bearer ${token} `: `Bearer ${localStorage.getItem('bearer')}`
    }
  }).then(result => {
    console.log(result)
    return result
  }).catch(err => console.log(err))
}

export const refresh = () => {
  return axios.post(refreshToken, {token: localStorage.getItem('refresh-bearer')}, {
    headers: { 'Authorization' : `Bearer ${localStorage.getItem('bearer')}` }
  }).then(result =>{
     console.log(result)
      return result
  }).catch(err => console.log(err))
}

export const getUser = (id,username,password) => {
  return axios.put(`${singleUserUrl}${id}`, { username, password }).then(result => {
    return result
  }).catch(err => console.log(err))
}

export const updateUser = (id,username, password) => {
  return axios.put(`http://79.26.34.212:8000/users/${id}`, { username, password }).then(result => {
    return result
  }).catch(err => console.log(err))
}