import { useEffect, useState } from 'react'

import { notesOfUser } from '../service/getUserData'

const useDataUser = (username) => {
  const [dataUser, setDataUser] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!dataUser) {
      notesOfUser({ username }).then(setDataUser).catch(setError)
    }
  }, [])

  return { dataUser, error }
}

export default useDataUser
