import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button, Spacer, useMediaQuery } from '@geist-ui/react'
import { BookOpen, Home, User, LogOut, LogIn } from '@geist-ui/react-icons'

import useAuth from '../../hooks/useAuth'

export default function Navbar() {
  const { user, logout } = useAuth()

  const isXS = useMediaQuery('xs')

  return (
    <nav>
      <Spacer />
      <Grid.Container gap={isXS ? 0.5 : 1} justify="space-between">
        <Grid xs={6} justify="center">
          <Link to="/">
            <Button auto icon={!isXS && <Home />}>
              Home
            </Button>
          </Link>
        </Grid>
        <Grid xs={6} justify="center">
          <Link to="/notes">
            <Button auto icon={!isXS && <BookOpen />}>
              Notes
            </Button>
          </Link>
        </Grid>
        <Grid xs={6} justify="center">
          <Link to="/users">
            <Button auto icon={!isXS && <User />}>
              Users
            </Button>
          </Link>
        </Grid>
        <Grid xs={6} justify="center">
          {user ? (
            <Button onClick={logout} auto type="secondary" icon={!isXS && <LogOut />}>
              logout
            </Button>
          ) : (
            <Link to="/login">
              <Button auto icon={!isXS && <LogIn />}>
                Login
              </Button>
            </Link>
          )}
        </Grid>
      </Grid.Container>
      <Spacer />
    </nav>
  )
}
