import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import useAuth from '../../hooks/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <NavBar bg="light" variant="light">
      <Container>
        <NavBar.Text>
          <Link to="/">Home</Link>
        </NavBar.Text>
        <NavBar.Text>
          <Link to="/notes">Notes</Link>
        </NavBar.Text>
        <NavBar.Text>
          <Link to="/users">Users</Link>
        </NavBar.Text>
        <NavBar.Text>
          {user ? (
            <button type="button" onClick={logout}>
              logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </NavBar.Text>
      </Container>
    </NavBar>
  )
}
