import axios from 'axios'

// const baseUrl = 'https://fullstack-bootcamp-note-app.herokuapp.com/api/notes'
const baseUrl = 'http://localhost:3001/api/notes'

let token = null

const getToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newNote) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.post(baseUrl, newNote, config)
  const data = await request.data
  return data
}

const update = async (id, newNote) => {
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.put(`${baseUrl}/${id}`, newNote, config)
  const data = await request.data
  return data
}

export { getAll, create, update, getToken }
