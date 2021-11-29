import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Spacer } from '@geist-ui/react'
import { BookOpen, Home, User, LogOut, LogIn } from '@geist-ui/react-icons'

import useAuth from '../../hooks/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav>
      <Spacer />
      <Grid.Container gap={1} justify="space-between">
        <Grid xs={6} justify="center">
          <Button auto icon={<Home />}>
            <Link to="/">Home</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          <Button auto icon={<BookOpen />}>
            <Link to="/notes">Notes</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          <Button auto icon={<User />}>
            <Link to="/users">Users</Link>
          </Button>
        </Grid>
        <Grid xs={6} justify="center">
          {user ? (
            <Button onClick={logout} auto type="secondary" icon={<LogOut />}>
              logout
            </Button>
          ) : (
            <Button auto icon={<LogIn />}>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Grid>
      </Grid.Container>
      <Spacer />
    </nav>
  )
}
