const assert = require('assert')

const Postgres = require('../src/db/strategies/postgres');

const Context = require('../src/db/strategies/base/contextStrategy')

const context = new Context(new Postgres)
const MOCK_HEROI_CADASTRAR = {
  nome: 'Vibe', 
  poder: 'vibração, frequencia e resosnancia'
}
const MOCK_HEROI_ATUALIZAR = {
  nome: 'Batman', 
  poder: 'DinDin'
}
describe('Postgres Sttrategy tests',() => {
  before(async () => {
    await context.connect()
    await context.create(MOCK_HEROI_ATUALIZAR)
  })
  it('PostgresSQL Connection', async () => {
    const result = await context.isConnected()
    assert.equal(result, true)
  })
  it('PostgresSQL CREATE', async () => {
    const result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('PostgresSQL READ', async () => {
    const [result] = await context.read({ nome: MOCK_HEROI_CADASTRAR.nome })
    delete result.id
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('PostgresSQL UPDATE', async () => {
    const [itemAtualizar] = await context.read({nome: MOCK_HEROI_ATUALIZAR.nome})
    const novoItem = {
      ...MOCK_HEROI_ATUALIZAR,
      nome: 'Mulher Maravilha'
    }
    const [result] = await context.update(itemAtualizar.id, novoItem)
    const [itemAtualizado] = await context.read({id: itemAtualizar.id})
    assert.deepEqual(result, 1)
    assert.deepEqual(itemAtualizado.nome, novoItem.nome)
  })

  // it('PostgresSQL DELETE', async () => {})

  
})