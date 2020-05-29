const Sequelize = require('sequelize')

const driver = new Sequelize(
  'heroes',
  'raufa',
  'yourPassword',
  {
    host: 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  }

)
async function main() {
  
  
  // await Herois.create({
  //   nome: 'Lanterna',
  //   poder: 'Anel'
  // })
  const result = await Herois.findAll({raw: true, attributes: ['nome']});
  console.log('result', result)
}
main()