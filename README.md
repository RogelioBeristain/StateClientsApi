# Client States

## Info 

Client States is a simple API REST, written in JavaScript, 
where you can register a client and update their status in the system. the API supports file uploads. The data is intended to be stored in a mySql database. 

For more information see:
[**Client Sates Wiki**](https://github.com/RogelioBeristain/stateClientsApi/wiki)

FRONT VERSIONS:
[**ANGULAR**](https://github.com/RogelioBeristain/ClientSatesAngular)

FRONT VERSIONS:
[**ANDROID KOTLIN**](#)

## Legal information and credits

It's licensed under the MIT license.


* * *


## Installation


The technologies used in this project are the following:
NodeJs , Mysql
```bash
> npm install express dotenv equelize mysql2 cors
```



*equelize is a ORM:* `https://sequelize.org/docs/v6/getting-started/`




## Usage

You only need five lines of code, to generate and view your first the migrations for db and seeders.

#### POSTMAN LINK
```
 https://www.getpostman.com/collections/cdbb8143f3fffe29dcf9
```
### ENPOINTS
```
  POST
  http://localhost:3000/api/v1/clients
  PATCH
  http://localhost:3000/api/v1/clients/aprovate  
  http://localhost:3000/api/v1/clients/unaprovate 
  GET
  http://localhost:3000/api/v1/clients/info/{id} 
  http://localhost:3000/api/v1/clients
  
```

