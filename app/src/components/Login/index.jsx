import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import loginService from '../../service/login'
import Notification from '../Notification'
import Togglable from '../Togglable'

export default function Login({ saveUser }) {
  const [error, setError] = useState(false)
  const formLoginRef = useRef(null)

  const handleLogin = (event) => {
    event.preventDefault()
    const formData = new FormData(formLoginRef.current)
    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
    }

    loginService
      .login(userData)
      .then((response) => {
        saveUser(response)
        sessionStorage.setItem('sessionUser', JSON.stringify(response))
      })
      .catch((err) => {
        setError(err.response.data)
        sessionStorage.clear()
        setTimeout(() => {
          setError(false)
        }, 2500)
      })
  }

  return (
    <Togglable buttonLabel="Show Login form">
      <form onSubmit={handleLogin} ref={formLoginRef}>
        <label htmlFor="username">
          <input id="username" name="username" type="text" placeholder="Username" />
        </label>
        <label htmlFor="password">
          <input id="password" name="password" placeholder="password" type="password" />
        </label>
        {error && <Notification message={error.error} />}
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </Togglable>
  )
}

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
}
