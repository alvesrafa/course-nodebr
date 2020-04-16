const Commander = require('commander');
const Database = require('./database/database');
const Heroi = require('./heroi');

async function main(){
  Commander.version('v1')

    .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-i, --id [value]', "ID do Heroi")

    .option('-c, --cadastrar', "Cadastrar um heroi")
    .option('-l, --listar', "Listar herois/heroi")
    .option('-r, --remover [id]', "Remover heroi pelo ID")
    .option('-a, --atualizar [value]', "Atualizar heroi pelo ID")
    .parse(process.argv)

    const heroi = new Heroi(Commander)
    

  try {

    if(Commander.cadastrar) {
      delete heroi.id
      const resultado = await Database.cadastrar(heroi)
      if(!resultado) {
        console.error('Heroi não foi cadastrado')
        return ;
      }
      console.log('Heroi cadastrado com sucesso!')
    }

    if(Commander.listar) {
      const resultado = await Database.listar()
      if(!resultado) {
        console.error('Heroi não foi cadastrado')
        return ;
      }
      console.log(resultado)
    }

    if(Commander.remover) {
      const resultado = await Database.remover(heroi.id)
      if(!resultado) {
        console.error('Não foi possivel remover o herói')
        return ;
      }
      console.log('heroi removido com sucesso')
    }

    if(Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar)
      console.log(Commander.atualizar)
      //remover todas as chaves que estiverem undefined
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado)
      const resultado =  await Database.atualizar(idParaAtualizar, heroiAtualizar)
      if(!resultado) {
        console.error('Não foi possivel atualizar o herói')
        return;
      }
      console.log('Heroi atualizado com sucesso!')
    }
  }catch (e) {
    console.error('Erro', e)
  }
}
main()