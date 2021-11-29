import { useState } from 'react'
import { Grid } from '@geist-ui/react'

import useNotes from '../../hooks/useNotes'
import Note from '../../components/Note'
import AddNote from '../../components/AddNote'

export default function Notes() {
  const { notes, updateNote } = useNotes()
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll ? notes : notes.filter((note) => note.important)

  const handleShowImportant = () => setShowAll((prevProps) => !prevProps)

  const handleToggleImportant = (id) => {
    const noteToEdit = notes.find((note) => note.id === id)
    const newNote = {
      ...noteToEdit,
      important: !noteToEdit.important,
    }
    updateNote({ id, newNote })
  }

  return (
    <>
      <div>
        <AddNote />
        <button type="button" onClick={handleShowImportant}>
          {showAll ? 'Show Important' : 'Show All'}
        </button>
      </div>
      <Grid.Container gap={2}>
        {noteToShow?.map(({ id, content, important }) => (
          <Note
            key={id}
            id={id}
            content={content}
            toggleImportant={handleToggleImportant}
            important={important}
          />
        ))}
      </Grid.Container>
    </>
  )
}
