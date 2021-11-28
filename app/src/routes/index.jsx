import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import NotFound from '../pages/Errors/NotFound'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NoteDetail from '../pages/NoteDetail'
import Notes from '../pages/Notes'
import Users from '../pages/Users'

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="notes" element={<Notes />} />
          <Route path="note/:id" element={<NoteDetail />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
