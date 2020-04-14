const { getUsers } = require('./service');
Array.prototype.meuFilter = function (callback) {
  const lista = []
  for (index in this) {
      const item = this[index]
      const result = callback(item, index, this)
      // 0, "", null, undefined === false
      if (!result) continue;//se nao for falso continua
      lista.push(item)//se for true vai adicionar a nova lista este item
  }
  return lista;
}


async function main(){
  try {
    const { items } = await getUsers('alves')

    const rafa = items.filter(item => {
      //por padrao precisa retornar um boolan
      // para informar se deve manter ou remover da lista
      // false = remove da lista
      // true = mantem 
      const result = item.login.toLowerCase().indexOf('rafa') !== -1 
      // nao encontrou = -1
      // encontrou = posicao no array
      // comparativo pra retornar true ou false
      return result;
    })
    //ESSSA FUNÇÃO DE CIMA PODIA TER SIDO ESCRITA ASSIM
    //const rafa = items.filter(item => item.login.toLowerCase().indexOf('rafa') !== -1 )

    // const rafa = items.meuFilter(item => item.login.toLowerCase().indexOf('rafa') !== -1)
    const names = rafa.map(item => item.login)
    console.log(names)

     
  } catch(e){
    console.error('deu erro', e)
  }
}
main()