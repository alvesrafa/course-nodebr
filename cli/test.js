const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = { nome: 'Batman', poder: 'Rico', id: 1 }
const database = require('./database/database');

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
  })
  it('deve buscar um usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id); 
//mesma coisa de resultado[0], posso tambem escolher a posição [resultado, numPosicao]
    deepEqual(resultado, expected)
  })
  it('deve cadastrar um heroi , usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(actual, expected)
  })
})