const assert = require('assert')

const MongoDB = require('../src/db/strategies/mongodb');

const Context = require('../src/db/strategies/base/contextStrategy')

const context = new Context(new MongoDB)
const MOCK_HEROI_CADASTRAR = {
  nome: 'Vibe', 
  poder: 'vibração, frequencia e resosnancia'
}
const MOCK_HEROI_ATUALIZAR = {
  nome: 'Batman', 
  poder: 'DinDin'
}
describe('MongoDB Sttrategy tests',() => {
  before(async () => {
    await context.connect()
  })
  it.only('MongoDB Connection', async () => {
    const result = await context.isConnected()
    const expected = 'Conectado'
    assert.deepEqual(result, expected)
  })
  // it('PostgresSQL CREATE', async () => {
   
  // })
  // it('PostgresSQL READ', async () => {
   
  // })
  // it('PostgresSQL UPDATE', async () => {
    
  // })
  // it('PostgresSQL DELETE', async () => {
   
  // })

  
})