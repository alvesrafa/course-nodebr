// docker ps
// docker exec -it 702f1989deb5 mongo --host localhost -u admin -p admin --authenticationDatabase admin

// show dbs

// use herois

// show collections


db.herois.find()
db.herois.find().pretty()

for(let i=0; i <= 100000; i++) {
  DataView.herois.insert({
    nome: `Clone ${i}`,
    poder: 'Velocidade',
    dataNascimento: '199-01-01'
  })
}
db.herois.cont()
db.herois.findOne()
db.herois.find().limit(1000).sort({nome: -1})
db.herois.find({}, {poder: 1, _id: 0}) //tras o poder, ignora o id

//CREATE
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dtaNascimento: '1999/05/17'
})
//READ
db.herois.find()
db.herois.find().pretty()
//UPDATE
db.herois.update({_id: '5e9cd335a832ba3f6c28fc2a'}, // aqui ele atualiza o nome mas as outras propriedas sumiram
                {nome: 'Mulher Maravilha'});
//UPDTE SO ATUALIZ O PRIMEIRO
db.herois.update({_id: '5e9cd335a832ba3f6c28fc2a'}, 
                {$set: { nome: 'Lanterna Verde'} }); //Aqui ele atualiz tudo, mas se caso a propriedade n exista, ele adiciona oq esta escrito. Muito ocmum trocar name por nome. e no casao ele vai adicionar o naame e o objeto tera name e nome...

//DELETE
db.herois.remove({})
db.herois.remove({nome: 'Mulher Maaravilha'})
