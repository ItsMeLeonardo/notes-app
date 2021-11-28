import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'normalize.css'
import RouterConfig from './routes'
import { NoteProvider } from './context/NoteContext'
import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <AuthProvider>
    <NoteProvider>
      <RouterConfig />
    </NoteProvider>
  </AuthProvider>,
  document.getElementById('root'),
)
