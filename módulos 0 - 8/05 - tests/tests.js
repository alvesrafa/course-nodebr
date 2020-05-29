const assert = require('assert')
const { getUsers } = require('./service')
// package Nock para simular requisições
const nock = require('nock');

describe('Git Hub Tests', function(){
  this.beforeAll(() => {
    const response = {"total_count":1,"incomplete_results":false,"items":[{"login":"alvesrafaela","id":59485415,"node_id":"MDQ6VXNlcjU5NDg1NDE1","avatar_url":"https://avatars1.githubusercontent.com/u/59485415?v=4","gravatar_id":"","url":"https://api.github.com/users/alvesrafaela","html_url":"https://github.com/alvesrafaela","followers_url":"https://api.github.com/users/alvesrafaela/followers","following_url":"https://api.github.com/users/alvesrafaela/following{/other_user}","gists_url":"https://api.github.com/users/alvesrafaela/gists{/gist_id}","starred_url":"https://api.github.com/users/alvesrafaela/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/alvesrafaela/subscriptions","organizations_url":"https://api.github.com/users/alvesrafaela/orgs","repos_url":"https://api.github.com/users/alvesrafaela/repos","events_url":"https://api.github.com/users/alvesrafaela/events{/privacy}","received_events_url":"https://api.github.com/users/alvesrafaela/received_events","type":"User","site_admin":false,"score":1}]}
    
    nock('https://api.github.com')
    .get('/search/users?q=alvesrafaela') // deve ser o mesmo parametro dos testes
    .reply(200, response)
  })
  
  it('deve buscar o alvesrafa com o formato correto', async () => {

    const expected = [{ login: 'alvesrafaela'}] //valor esperado

    const nomeBase = 'alvesrafaela'
    const resultado = await getUsers(nomeBase)
    assert.deepEqual(resultado, expected)
  })
})