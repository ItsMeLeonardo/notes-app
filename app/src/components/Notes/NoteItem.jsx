import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useNotes from '../../hooks/useNotes'

function NoteItem({ content, important, id }) {
  const [importantState, setImportantState] = useState(important)
  const { updateNote } = useNotes()
  const style = { display: 'flex', justifyContent: 'start', alignItems: 'center' }
  const handleImportantToggle = () => {
    const newNote = {
      content,
      important: !importantState,
    }
    setImportantState(newNote.important)
    updateNote({ id, newNote })
  }

  return (
    <li style={style}>
      <p>{content}</p>
      <button type="button" onClick={handleImportantToggle}>
        {importantState ? 'Important' : 'Not Important'}
      </button>
    </li>
  )
}

export default React.memo(
  NoteItem,
  (prevProps, nextProps) => prevProps.id === nextProps.id,
)

NoteItem.propTypes = {
  content: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
}
