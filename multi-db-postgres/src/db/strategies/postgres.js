const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')


class Postgres extends ICrud {
  constructor() {
    super()
    this._driver = null,
    this._herois = null,
    this._connect()
  }
  async isConnected() {
    try {
      await this._driver.authenticate()
      return true;
    } catch (e) {
      console.error('fail', e)
      return false
    }
  }
  create(item) {
    console.log('O item foi salvo em Postgres')
  }
  defineModel() {
    this._herois = driver.define('heroes', {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        required: true
      },
      poder: {
        type: Sequelize.STRING,
        required: true
      }
    }, {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false
    })
    await Herois.sync()
  }
  _connect() {
    this._driver = new Sequelize(
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
  }
}

module.exports = Postgres