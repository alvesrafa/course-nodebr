const Mongoose = require('mongoose')
Mongoose.connect('mongodb://admin:admin@localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}, (error) => {
  if(!error) return ;
  console.log('Falha na conexão', error)
});

const connection = Mongoose.connection;
connection.once('open', () => console.log('Database rodando!'))
// setTimeout(() => {
//   const state = connection.readyState
//   console.log('state', state)
// }, 1000)
const heroisSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  poder: {
    type: String,
    required: true
  },
  insertedAt: {
    type: Date,
    default: new Date()
  }

})
const model = Mongoose.model('herois', heroisSchema)

async function main () {
  const resultCadastrar = await model.create({
    nome: 'batman',
    poder: 'DinDin'
  })
  const listItens = await model.find() 
  console.log('items', listItens)
  console.log('result cadastrar', resultCadastrar)
}
main()