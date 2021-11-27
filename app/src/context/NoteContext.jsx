import React, { /* useCallback, useMemo, */ useState } from 'react'

const NoteContext = React.createContext()

function NoteContextProvider({ children }) {
  // const [initialNotes, setInitialNotes] = useState([])
  const [notes, setNotes] = useState(() => {
    const localData = localStorage.getItem('notes')
    return localData ? JSON.parse(localData) : null
  })

  // const notes = useMemo(() => initialNotes, [initialNotes])
  // const setNotes = useCallback(setInitialNotes, [setInitialNotes])

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>{children}</NoteContext.Provider>
  )
}

export { NoteContextProvider, NoteContext }
