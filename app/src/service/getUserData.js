import axios from 'axios'

const baseUrl = '/api/users'

// eslint-disable-next-line import/prefer-default-export
export const getNotesOfUser = async ({ username }) => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response.data
}
