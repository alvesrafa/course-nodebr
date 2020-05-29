const { getUsers } = require('./service');

Array.prototype.meuMap = function(callback) {

  const novoArrayMapeado = []

  for(let i = 0; i <= this.length-1 ; i++) {
    const resultado = callback(this[i], i)
    novoArrayMapeado.push(resultado)
  }
  return novoArrayMapeado;
}


async function main(){
  try{
    const response = await getUsers('alvesrafa')

    // response.items.forEach(item => {
    //   names.push(item.login)
    // })

    // const names = response.items.map(item => item.login)
    const names = response.items.meuMap((item, i) => {
      return item.login;
    })
    console.log(names)
  } catch(e){
    console.error('Deu Ruim',e)
  }
}
main()