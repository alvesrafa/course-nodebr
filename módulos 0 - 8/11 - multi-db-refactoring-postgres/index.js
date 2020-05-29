const Sequelize = require('sequelize');

//testando conexão com postgres
async function main(){
  try{
    const connection = new Sequelize("heroes", "postgres", "root", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operatorsAliases: false,
      logging: false
    });
    console.log('Connection', connection)
  } catch (e){
    console.log('ERRO',e)
  }
}
main()