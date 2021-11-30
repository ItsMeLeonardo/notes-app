import React from 'react'
import { Avatar, Text, Button, Card } from '@geist-ui/react'
import Heart from '@geist-ui/react-icons/heart'
import Book from '@geist-ui/react-icons/book'

import RequireAuth from '../../utils/RequireAuth'
import useAuth from '../../hooks/useAuth'
import useDataUser from '../../hooks/useDataUser'

function Users() {
  const { user } = useAuth()
  const { dataUser } = useDataUser(user.username)

  const avatarSize = '8rem'

  return (
    <main className="flex center column">
      <Text h2>User</Text>
      <Card shadow width="320px">
        <Avatar
          height={avatarSize}
          width={avatarSize}
          src="https://images.unsplash.com/photo-1579493934830-eab45746b51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="profile of silvia"
        />
        <Text p b font="1.25rem">
          {user?.name}
        </Text>
        <Text small>@{user?.username}</Text>

        <Text className="flex center gap-1">
          {dataUser?.notes?.length} Posts <Book size={20} />
        </Text>

        <div className="flex center gap-2">
          <Button type="secondary" ghost auto>
            follow
          </Button>
          <Button type="secondary" ghost iconRight={<Heart />} auto px={0.6} />
        </div>
      </Card>
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
