const { getUsers  } = require('./service');

async function main(){
  try {
    const result = await getUsers('alvesrafa')
    const names = []

    console.time('for')
    for(let i = 0 ; i<= result.items.length -1 ; i++){
      const pessoa = result.items[i]
      names.push(pessoa.login)
    }
    console.timeEnd('for')

    console.time('forIn')
    for(let i in result.items){
      const pessoa = result.items[i]
      names.push(pessoa.login)
    }
    console.timeEnd('forIn')

    console.time('forOf')
    for(pessoa of result.items){
      names.push(pessoa.login)
    }
    console.timeEnd('forOf')
    
    console.log('names',names)

  } catch (e){
    console.error('Erro Man q isso', e)
  }
}
main();