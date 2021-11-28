import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'

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
