import { Input, Spacer, Button } from '@geist-ui/react'
import { Emoji } from '@geist-ui/react-icons'
import { useRef } from 'react'

import Notification from '../../components/Notification'
import Togglable from '../../components/Togglable'
import useAuth from '../../hooks/useAuth'

export default function Login() {
  const { login, error } = useAuth()
  const inputRef = useRef(null)

  const handleLogin = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const userData = {
      username: formData.get('username'),
      password: formData.get('password'),
    }

    login(userData)
  }

  return (
    <Togglable buttonLabel="Show Login form">
      <form onSubmit={handleLogin}>
        <Input name="username" placeholder="Username" width="20" iconRight={<Emoji />} />
        <Spacer h={0.5} />

        <Input.Password name="password" width="20" placeholder="password" />
        <Spacer h={0.5} />

        {error && <Notification message={error.error} type="error" />}

        <input type="submit" ref={inputRef} style={{ display: 'none' }} />
        <Button
          type="success"
          id="login-button"
          onClick={() => inputRef.current.click()}
          width="1"
        >
          Login
        </Button>
      </form>
    </Togglable>
  )
}
