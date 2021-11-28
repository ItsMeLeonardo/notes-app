import { useState } from 'react'
import { NoteContextProvider } from './context/NoteContext'
import Header from './components/Header'
import Notes from './components/Notes'
import AddNote from './components/AddNote'
import Login from './components/Login'
import { getToken } from './service/getNotes'

import './App.css'

function App() {
  const [user, setUser] = useState(() => {
    const sessionUser = sessionStorage.getItem('sessionUser')
    if (sessionUser) {
      const userFromStorage = JSON.parse(sessionUser)
      getToken(userFromStorage.token)
      return userFromStorage
    }
    return null
  })

  const handleLogout = () => {
    setUser(null)
    sessionStorage.removeItem('sessionUser')
  }

  return (
    <div className="App">
      <Header />
      <NoteContextProvider>
        {user ? <AddNote logout={handleLogout} /> : <Login saveUser={setUser} />}
        <Notes />
      </NoteContextProvider>
    </div>
  )
}

export default App
