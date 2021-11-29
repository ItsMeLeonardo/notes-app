import React from 'react'
import RequireAuth from '../../utils/RequireAuth'
import useAuth from '../../hooks/useAuth'

export default function Users() {
  const { user } = useAuth()

  return (
    <RequireAuth>
      <main>
        <header>
          <img src="#" alt="profile of silvia" />
        </header>
        <section>
          <h1>{user?.name}</h1>
          <p>{user?.username}</p>
          <p>posts</p>
        </section>
        <footer>
          <button type="button">follow</button>
          <button type="button">like</button>
        </footer>
      </main>
    </RequireAuth>
  )
}
