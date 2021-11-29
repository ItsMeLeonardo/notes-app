import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

import './index.css'
import 'inter-ui/inter.css'
import RouterConfig from './routes'
import { NoteProvider } from './context/NoteContext'
import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <AuthProvider>
    <NoteProvider>
      <GeistProvider>
        <CssBaseline />
        <RouterConfig />
      </GeistProvider>
    </NoteProvider>
  </AuthProvider>,
  document.getElementById('root'),
)
