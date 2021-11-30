import { useCallback, useContext, useEffect, useState } from 'react'

import { NoteContext } from '../context/NoteContext'
import { getAll, create, update } from '../service/getNotes'

const useNotes = () => {
  const { notes, setNotes } = useContext(NoteContext)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!notes) {
      getAll().then(setNotes)
    }
  }, [])

  const saveNote = useCallback(
    (note) => {
      create(note).then((newNote) => {
        setNotes((prevNotes) => [...prevNotes, newNote])
      })
    },
    [setNotes],
  )

  const updateNote = useCallback(
    ({ id, newNote }) => {
      update(id, newNote)
        .then((updatedNote) => {
          setNotes((prevNotes) =>
            prevNotes.map((note) => (note.id === id ? updatedNote : note)),
          )
        })
        .catch((err) => {
          setError({ err })
        })
    },
    [setNotes],
  )

  return { notes, saveNote, updateNote, error }
}

export default useNotes
