const axios = require('axios');
const URL = 'https://api.github.com';

async function getUsers (username) {
  const url = `${URL}/search/users?q=${username}`
  const response = await axios.get(url)

  return response.data
}
module.exports = {
  getUsers
}