import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import loginService from '../service/login'
import { getToken } from '../service/getNotes'

const useAuth = () => {
  const [error, setError] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      const savedUserFromSession = sessionStorage.getItem('sessionUser')
      const userSaved = savedUserFromSession ? JSON.parse(savedUserFromSession) : null
      setUser(userSaved)
      getToken(userSaved?.token)
    }
  }, [])

  const login = useCallback(
    ({ username, password }, path = '/') => {
      loginService
        .login({ username, password })
        .then((response) => {
          sessionStorage.setItem('sessionUser', JSON.stringify(response))
          setUser(response)
          getToken(response.token)
          navigate(path)
        })
        .catch((err) => {
          setError(err.response.data)
          sessionStorage.clear()
          setTimeout(() => {
            setError(false)
          }, 2500)
        })
    },
    [setUser],
  )

  const logout = useCallback(() => {
    sessionStorage.removeItem('sessionUser')
    setUser(null)
  }, [setUser])
  return { login, user, logout, error }
}

export default useAuth
