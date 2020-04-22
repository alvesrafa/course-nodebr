const assert = require('assert')

const MongoDB = require('../src/db/strategies/mongodb');

const contextStrategy = require('../src/db/strategies/base/contextStrategy')

const context = new contextStrategy(new MongoDB)
const MOCK_HEROI_DEFAULT= {
  nome: `Doutor Estranho - ${Date.now()}`, 
  poder: 'Mago'
}
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
    await context.create(MOCK_HEROI_DEFAULT)
  })
  it('MongoDB Connection', async () => {
    const result = await context.isConnected()
    const expected = 'Conectado'
    assert.deepEqual(result, expected)
  })
  it('MongoDB CREATE', async () => {
    const {nome, poder} = await context.create(MOCK_HEROI_CADASTRAR)
    assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
  })
  it('PostgresSQL READ', async () => {
   const RESULT = await context.read({nome: MOCK_HEROI_DEFAULT.nome})
   console.log(RESULT)
   const [{nome, poder}] = await context.read({nome: MOCK_HEROI_DEFAULT.nome})

   const result = {
     nome,
     poder
   }
   assert.deepEqual(result, MOCK_HEROI_DEFAULT)
  })
  // it('PostgresSQL UPDATE', async () => {
    
  // })
  // it('PostgresSQL DELETE', async () => {
   
  // })

  
})