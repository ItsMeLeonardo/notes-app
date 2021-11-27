import axios from 'axios'

const baseUrl = '/api/login'

const login = async ({ username, password }) => {
  const { data } = await axios.post(baseUrl, { username, password })
  return data
}

export default { login }
