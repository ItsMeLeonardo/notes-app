import React from 'react'
import RequireAuth from '../../utils/RequireAuth'
import useAuth from '../../hooks/useAuth'
import useDataUser from '../../hooks/useDataUser'

function Users() {
  const { user } = useAuth()
  const { dataUser } = useDataUser(user.username)

  return (
    <main>
      <header>
        <img src="#" alt="profile of silvia" />
      </header>
      <section>
        <h1>{user?.name}</h1>
        <p>{user?.username}</p>
        <p>{dataUser?.notes?.length} Posts</p>
      </section>
      <footer>
        <button type="button">follow</button>
        <button type="button">like</button>
      </footer>
    </main>
  )
}

export default function UsersAuth() {
  return (
    <RequireAuth>
      <Users />
    </RequireAuth>
  )
}
