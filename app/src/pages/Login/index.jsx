import { Input, useMediaQuery, Button, Grid, Text } from '@geist-ui/react'
import { Emoji } from '@geist-ui/react-icons'
import { useRef } from 'react'

import Notification from '../../components/Notification'
import Togglable from '../../components/Togglable'
import useAuth from '../../hooks/useAuth'

export default function Login() {
  const { login, error } = useAuth()
  const inputRef = useRef(null)

  const isXS = useMediaQuery('xs')

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
    <section>
      <Text h1>Login</Text>
      <Togglable buttonLabel="Show Login form">
        <form onSubmit={handleLogin}>
          <input type="submit" ref={inputRef} style={{ display: 'none' }} />
          <Grid.Container gap={1} justify="center" direction="column" alignItems="center">
            <Grid sm={24}>
              <Input name="username" placeholder="Username" iconRight={<Emoji />} />
            </Grid>

            <Grid sm={24}>
              <Input.Password name="password" placeholder="password" />
            </Grid>

            <Grid>{error && <Notification message={error.error} type="error" />}</Grid>

            <Grid>
              <Button
                type="success"
                id="login-button"
                width={isXS ? '100%' : 'auto'}
                // width="100%"
                onClick={() => inputRef.current.click()}
              >
                Login
              </Button>
            </Grid>
          </Grid.Container>
        </form>
      </Togglable>
    </section>
  )
}
