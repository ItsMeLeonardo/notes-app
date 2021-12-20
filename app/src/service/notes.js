import axios from 'axios'

const baseUrl = '/api/notes'

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
  try {
    const config = {
      headers: { Authorization: token },
    }
    const request = await axios.put(`${baseUrl}/${id}`, newNote, config)
    const data = await request.data
    return data
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}

const remove = async (id) => {
  try {
    const config = {
      headers: { Authorization: token },
    }
    const request = await axios.delete(`${baseUrl}/${id}`, config)
    return request.status === 204 ? 'Note removed' : new Error('Could not remove note')
  } catch (error) {
    throw new Error(error.response.data.error)
  }
}
export { getAll, create, update, getToken, remove }
