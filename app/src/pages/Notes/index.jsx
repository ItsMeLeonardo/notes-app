import { useState } from 'react'
import { Grid, Button, Spacer, useMediaQuery, Text } from '@geist-ui/react'

import useNotes from '../../hooks/useNotes'
import useAuth from '../../hooks/useAuth'
import Note from '../../components/Note'
import AddNote from '../../components/AddNote'

export default function Notes() {
  const { notes, updateNote } = useNotes()
  const { user } = useAuth()
  const [showAll, setShowAll] = useState(true)
  const isXS = useMediaQuery('xs')

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

  const styleOfButtons = {
    desktop: { display: 'flex', justifyContent: 'center', gap: '1rem' },
    mobile: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flexDirection: 'column',
    },
  }

  return (
    <>
      <Text h1>Notes</Text>
      <div style={isXS ? styleOfButtons.mobile : styleOfButtons.desktop}>
        <AddNote />
        <Button onClick={handleShowImportant} type="success" ghost>
          {showAll ? 'Show Important' : 'Show All'}
        </Button>
      </div>
      <Spacer />
      <Grid.Container gap={2} style={{ padding: '.5rem' }}>
        {noteToShow?.map(({ id, content, important }) => (
          <Note
            key={id}
            id={id}
            content={content}
            toggleImportant={handleToggleImportant}
            important={important}
            isAuth={Boolean(user)}
          />
        ))}
      </Grid.Container>
    </>
  )
}
