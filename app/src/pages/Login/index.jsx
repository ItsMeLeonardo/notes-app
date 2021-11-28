import { useRef } from 'react'

import Notification from '../../components/Notification'
import Togglable from '../../components/Togglable'
import useAuth from '../../hooks/useAuth'

export default function Login() {
  const { login, error } = useAuth()

  const formLoginRef = useRef(null)

  const handleLogin = (event) => {
    event.preventDefault()
    const formData = new FormData(formLoginRef.current)
    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
    }

    login(userData)
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
