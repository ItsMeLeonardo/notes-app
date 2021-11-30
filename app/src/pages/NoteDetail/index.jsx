import { Display, Text, User } from '@geist-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import useNotes from '../../hooks/useNotes'

export default function NoteDetail() {
  const { id } = useParams()

  const { notes } = useNotes()

  const noteDetail = notes?.find((note) => note.id === id)

  return (
    <Display shadow width="500px">
      <Text p>{noteDetail?.content}</Text>
      <User
        style={{ marginBottom: '1rem' }}
        src="https://images.unsplash.com/photo-1579493934830-eab45746b51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name={noteDetail?.user.name}
      >
        JavaScript engineer
      </User>
    </Display>
  )
}
