const { getUsers } = require('./service')
Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0];
  for(let i = 0; i <= this.length-1 ; i++){
    valorFinal = callback(valorFinal, this[i], this)
  }
  return valorFinal;
}

async function main(){
  try{
    const { items } = await getUsers('alvesrafa');

    // const ids = items.map(item => item.id)
    // console.log(ids)
    // const soma = ids.reduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0)
    // console.log(soma)
    const minhaLista = [
      ['Rafael', 'Alves'],
      ['Precisa', 'de', 'Trabalho']
    ]
    const result = minhaLista.meuReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    console.log(result.join(' '))
  } catch (e) {
    console.error('Deu erro', e)
  }
}
main()