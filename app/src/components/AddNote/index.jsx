import { Button, Input, Grid } from '@geist-ui/react'
import { useRef } from 'react'

import useNotes from '../../hooks/useNotes'
import Togglable from '../Togglable'

export default function AddNote() {
  const togglableRef = useRef(null)
  const { saveNote } = useNotes()
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const note = {
      content: formData.get('note'),
      important: true,
    }
    const inputText = event.target[1]
    inputText.value = ''
    saveNote(note)
    togglableRef.current.toggleVisibility()
  }

  return (
    <Togglable buttonLabel="Add note" ref={togglableRef}>
      <form onSubmit={handleSubmit}>
        <Grid.Container gap={2} alignItems="center">
          <input type="submit" ref={inputRef} style={{ display: 'none' }} />
          <Grid>
            <Input height="40px" name="note" placeholder="Write your note here" />
          </Grid>
          <Grid>
            <Button onClick={() => inputRef.current.click()} auto type="secondary">
              Save
            </Button>
          </Grid>
        </Grid.Container>
      </form>
    </Togglable>
  )
}
