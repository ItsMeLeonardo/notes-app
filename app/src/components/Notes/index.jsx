import { useState } from 'react'
import useNotes from '../../hooks/useNotes'
import NoteItem from './NoteItem'

export default function Notes() {
  const { notes } = useNotes()
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll ? notes : notes.filter((note) => note.important)

  const handleShowImportant = () => setShowAll((prevProps) => !prevProps)

  return (
    <>
      <button type="button" onClick={handleShowImportant}>
        {showAll ? 'Show Important' : 'Show All'}
      </button>
      <ul>
        {noteToShow?.map(({ id, content }) => (
          <NoteItem key={id} content={content} />
        ))}
      </ul>
    </>
  )
}
