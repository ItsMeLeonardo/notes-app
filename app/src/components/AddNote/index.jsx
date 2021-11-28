import { useRef } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      <Form ref={formRef} onSubmit={handleSubmit} className="d-flex gap-2">
        <Form.Control type="text" name="note" placeholder="Write your note here" />
        <Button as="input" type="submit" value="add note" />
      </Form>
    </Togglable>
  )
}
