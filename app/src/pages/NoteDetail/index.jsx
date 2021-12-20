import { Display, Text, User, Button, useModal, Modal } from '@geist-ui/react'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useNotes from '../../hooks/useNotes'

export default function NoteDetail() {
  const { id } = useParams()
  const { notes, removeNote } = useNotes()
  const navigate = useNavigate()

  const { visible, setVisible, bindings } = useModal()

  const noteDetail = notes?.find((note) => note.id === id)

  const deleteNote = () => {
    setVisible(false)
    removeNote({ id })
    setTimeout(() => navigate('/notes'), 500)
  }

  return (
    <>
      <Display shadow width="500px">
        <Text p>{noteDetail?.content}</Text>
        <User
          style={{ marginBottom: '1rem' }}
          src="https://images.unsplash.com/photo-1579493934830-eab45746b51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          name={noteDetail?.user.name}
        >
          JavaScript engineer
        </User>
        <Button auto type="error" onClick={() => setVisible(true)}>
          Delete this note
        </Button>
      </Display>

      <Modal {...bindings}>
        <Modal.Title>Delete Note</Modal.Title>
        <Modal.Content>
          <p>Are you sure you want to delete this note?</p>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action onClick={deleteNote}>Delete</Modal.Action>
      </Modal>
    </>
  )
}
