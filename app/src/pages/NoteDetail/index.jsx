import React from 'react'
import { useParams } from 'react-router-dom'
import useNotes from '../../hooks/useNotes'

export default function NoteDetail() {
  const { id } = useParams()

  const { notes } = useNotes()

  const noteDetail = notes.find((note) => note.id === id)
  return <div>{noteDetail.content}</div>
}
