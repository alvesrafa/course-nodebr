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
      url: '/herois?skip=0&limit=10'
    })
    const statusCode = result.statusCode
    const data = JSON.parse(result.payload)

    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(data))
    
  })
  it('Listar /herois - Erro busca de herois por limit ser string', async () => {
    const TAMANHO_LIMIT = "aeee"
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=${TAMANHO_LIMIT}`
    })
    
    const statusCode = result.statusCode
    assert.deepEqual(result.payload, 'Erro interno no servidor')
  })
  it('Listar /herois - deve retornar somente 5 registros no max', async () => {
    const TAMANHO_LIMIT = 5
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=${TAMANHO_LIMIT}`
    })
    
    const statusCode = result.statusCode
    const data = JSON.parse(result.payload)

    assert.deepEqual(statusCode, 200)
    assert.ok(data.length <= TAMANHO_LIMIT)
  })
  it('Listar /herois - deve filtrar um item', async () => {
    const NAME = 'Doutor Estranho - 1590370102510'
    const result = await app.inject({
      method: 'GET',
      url: `/herois?skip=0&limit=1000&name=${NAME}`
    })
    
    const statusCode = result.statusCode
    const data = JSON.parse(result.payload)

    assert.deepEqual(statusCode, 200)
    assert.deepEqual(data[0].nome, NAME)
  })
})