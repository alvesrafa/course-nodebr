const assert = require('assert')

const api = require('./../src/api')
let app = {}
describe('Suite de testes da API Heroes', function () {
  this.beforeAll(async () => {
    app = await api
  })
  it('Listar /herois', async () => {
    const result = await app.inject({
      method: 'GET',
      url: '/herois'
    })
    const statusCode = result.statusCode
    const data = JSON.parse(result.payload)

    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(data))
    
  })
})