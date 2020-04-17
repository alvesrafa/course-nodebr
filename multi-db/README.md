docker run \
  --name postgres\
  -e POSTGRES_USER=raufa \
  -e POSTGRES_PASSWORD=toor \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres