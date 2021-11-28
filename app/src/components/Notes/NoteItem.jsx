import React, { useState } from 'react'
import PropTypes from 'prop-types'

function NoteItem({ id, content, important, toggleImportant }) {
  const [importantState, setImportantState] = useState(important)
  // const { updateNote } = useNotes()
  const style = { display: 'flex', justifyContent: 'start', alignItems: 'center' }

  const handleImportantToggle = () => {
    toggleImportant(id)
    setImportantState(!importantState)
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
  id: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  toggleImportant: PropTypes.func.isRequired,
}
