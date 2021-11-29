import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from '@geist-ui/react'
import { BookOpen, Home, User, LogOut, LogIn } from '@geist-ui/react-icons'

import useAuth from '../../hooks/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav>
      <Grid.Container
        gap={1}
        justify="space-between"
        marginTop=".5rem"
        marginBottom="1rem"
      >
        <Grid xs={6} justify="center">
          <Button shadow auto icon={<Home />}>
            <Link to="/">Home</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          <Button shadow auto icon={<BookOpen />}>
            <Link to="/notes">Notes</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          <Button shadow auto icon={<User />}>
            <Link to="/users">Users</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          {user ? (
            <Button shadow auto icon={<LogOut />} onClick={logout}>
              logout
            </Button>
          ) : (
            <Button shadow auto icon={<LogIn />}>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Grid>
      </Grid.Container>
    </nav>
  )
}
