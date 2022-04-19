## Setting up a MongoDB container

```yml
version: "3.8"
services:
  mongodb:
    image : mongo
    container_name: mongodb
    environment:
      - PUID=1000
      - PGID=1000
    volumes:
      - ./database:/data/db
    ports:
      - 27017:27017
    restart: unless-stopped
```

In the compose file, we have created a service called mongodb using the Docker image mongo. We have named the container “mongodb” and mapped the database folder within the container to the local database folder (./mongodb/database). The environment variables are used to define the “user” and “group” of the container. Finally, we mapped the local port 27017 to internal port 27017. Then the restart policy is set to restart unless stopped by the user.

`sudo docker-compose up -d`

## Interacting with the MongoDB container

`sudo docker exec -it mongodb bash`

In the bash terminal of the container, we call the mongo command to access MongoDB. We will create a database called “food” and a collection called “fruits”, along with three documents.

1. Switch the database

`use food`

2. Create collection

`db.createCollection("fruits")`

3. Insert documents

`db.fruits.insertMany([ {name: "apple", origin: "usa", price: 5}, {name: "orange", origin: "italy", price: 3}, {name: "mango", origin: "malaysia", price: 3} ])`

Search for the documents using the **find** command:

`db.fruits.find().pretty()`