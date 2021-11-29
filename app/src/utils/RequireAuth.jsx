import { Navigate } from 'react-router-dom'
import propTypes from 'prop-types'
import useAuth from '../hooks/useAuth'

export default function RequireAuth({ children }) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

RequireAuth.propTypes = {
  children: propTypes.node.isRequired,
}
