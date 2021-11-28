import { useState } from 'react'
import useNotes from '../../hooks/useNotes'
import NoteItem from './NoteItem'

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
      <button type="button" onClick={handleShowImportant}>
        {showAll ? 'Show Important' : 'Show All'}
      </button>
      <ul>
        {noteToShow?.map(({ id, content, important }) => (
          <NoteItem
            key={id}
            id={id}
            content={content}
            toggleImportant={handleToggleImportant}
            important={important}
          />
        ))}
      </ul>
    </>
  )
}
