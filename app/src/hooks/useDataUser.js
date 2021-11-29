import { useEffect, useState } from 'react'

import { getNotesOfUser } from '../service/getUserData'

const useDataUser = (username) => {
  const [dataUser, setDataUser] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!dataUser) {
      getNotesOfUser({ username }).then(setDataUser).catch(setError)
    }
  }, [])

  return { dataUser, error }
}

export default useDataUser
