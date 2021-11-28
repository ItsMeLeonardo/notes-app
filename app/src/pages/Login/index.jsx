import { Form, Col, Row } from 'react-bootstrap'

import Notification from '../../components/Notification'
import Togglable from '../../components/Togglable'
import useAuth from '../../hooks/useAuth'

export default function Login() {
  const { login, error } = useAuth()

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
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} controlId="formBasicUsername" className="my-3">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control name="username" type="text" placeholder="Username" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPassword" className="mb-3">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control name="password" placeholder="password" type="password" />
          </Col>
        </Form.Group>

        {error && <Notification variant="danger" message={error.error} />}

        <button type="submit" id="login-button" className="btn btn-primary">
          Login
        </button>
      </Form>
    </Togglable>
  )
}
