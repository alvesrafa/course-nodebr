## PostgreSQL
docker run -p 5432:5432 --name postgres -e POSTGRES_USER=raufa -e POSTGRES_PASSWORD=yourPassword -e POSTGRES_DB=heroes -d postgres 
- foi preciso ativar pelo dashboard da interface..
docker ps

docker exec -it psotgres /bin/bash 
- não acessou

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer
- Cria o cliente para acessar o bd

## MongoDB

docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4
- cria o servico do db]

docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient
-cria o srvicço pra visualizar o mongodb

docker exec -it mongodb \
  mongo --host localhost -u admin -p admin --authenticationDatabase admin \
  --eval "db.getSiblingDB('herois').createUser({user: 'raufa', pwd: 'raufa', roles: [{role: 'readWrite', db: 'herois'}]})"