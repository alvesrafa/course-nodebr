const axios = require('axios');
const URL = 'https://api.github.com';

async function getUsers (username) {
  const url = `${URL}/search/users?q=${username}`
  const response = await axios.get(url)
  console.log(JSON.stringify(response.data))
  return response.data.items.map(mapearPessoas)
}
function mapearPessoas(item) {
  return {login: item.login}
}
module.exports = {
  getUsers
}