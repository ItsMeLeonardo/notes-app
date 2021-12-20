import { useCallback, useContext, useEffect, useState } from 'react'

import { NoteContext } from '../context/NoteContext'
import { getAll, create, update, remove } from '../service/notes'

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

  const updateNote = ({ id, newNote }) => {
    update(id, newNote)
      .then((updatedNote) => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note.id === id ? updatedNote : note)),
        )
      })
      .catch((err) => {
        setError({ err })
      })
  }

  const removeNote = ({ id }) => {
    remove(id)
      .then((response) => {
        if (response) {
          setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
        }
      })
      .catch((err) => {
        setError({ err })
      })
  }

  return { notes, saveNote, updateNote, error, removeNote }
}

export default useNotes
