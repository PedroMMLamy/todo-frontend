/* import axios from 'axios'
axios.defaults.withCredentials = true


const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api',
  withCredentials: true
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(username, password) {
    return service
      .post('/login', {
        username,
        password,
      })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem('user')
    return service
      .get('/logout')
  },

 
}
*/