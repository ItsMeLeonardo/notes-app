import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import NoteItem from './NoteItem'
// import Notes from './index'

const notes = [
  {
    content: 'This is a test',
    important: true,
  },
  {
    content: 'Using testing library',
    important: false,
  },
  {
    content: 'Using jest',
    important: true,
  },
]

/* test('Notes, should hidden the unimportant notes when clicked on the button', async () => {
  const component = await render(<Notes />)
  component.debug()
}) */

test('NOTE_ITEM should render the note', () => {
  const [note] = notes

  const component = render(<NoteItem content={note.content} />)
  component.getByText(note.content)
  // component.debug()
})
