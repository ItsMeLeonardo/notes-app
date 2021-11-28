import { useCallback, useContext, useEffect } from 'react'

import { NoteContext } from '../context/NoteContext'
import { getAll, create, update } from '../service/getNotes'

const useNotes = () => {
  const { notes, setNotes } = useContext(NoteContext)

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
      update(id, newNote).then((updatedNote) => {
        setNotes((prevNotes) =>
          prevNotes.map((note) => (note.id === id ? updatedNote : note)),
        )
      })
    },
    [setNotes],
  )

  return { notes, saveNote, updateNote }
}

export default useNotes
