import { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

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
        <Button type="button" onClick={handleShowImportant} className="my-2">
          {showAll ? 'Show Important' : 'Show All'}
        </Button>
      </div>
      <ListGroup as="ul">
        {noteToShow?.map(({ id, content, important }) => (
          <Note
            key={id}
            id={id}
            content={content}
            toggleImportant={handleToggleImportant}
            important={important}
          />
        ))}
      </ListGroup>
    </>
  )
}
