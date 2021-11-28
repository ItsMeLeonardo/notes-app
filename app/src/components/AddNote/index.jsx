import { useRef } from 'react'
import PropTypes from 'prop-types'

import useNotes from '../../hooks/useNotes'
import Togglable from '../Togglable'

export default function AddNote() {
  const formRef = useRef(null)
  const togglableRef = useRef(null)
  const { saveNote } = useNotes()

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(formRef.current)
    const note = {
      content: formData.get('note'),
      important: true,
    }

    formRef.current.firstChild.value = ''
    saveNote(note)
    togglableRef.current.toggleVisibility()
  }

  return (
    <Togglable buttonLabel="Add note" ref={togglableRef}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="note" placeholder="Write your note here" />
        <input type="submit" value="add note" />
      </form>
    </Togglable>
  )
}
