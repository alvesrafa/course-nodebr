const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = { nome: 'Batman', poder: 'Rico', id: 1 }
const DEFAULT_ITEM_ATUALIZAR = { nome: 'Gambit', poder: 'Doidera', id: 2 }
const database = require('./database/database');

describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
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
  it('deve remover um heroi por id', async () => {
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(resultado, expected)
  })
  it('deve atualizar um heroi pelo id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Flash',
      poder: 'Velocidade'
    }
    const novoDado = {
      nome: 'Flash',
      poder: 'Velocidade'
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(resultado, expected)
  })
})