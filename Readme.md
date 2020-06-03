
Uma simples API feita com [Express.js](https://expressjs.com/) e [Sequelize ORM](https://sequelize.org/) para fim de estudos sobre validações com a biblioteca [express-validator](https://express-validator.github.io/docs/)

## Endpoints :link:

#### LISTING USERS
`METHOD:` GET 

`ENDPOINT:` /users

`RETURN:`
```
[
  {	
    "id": 1,
    "username": "jeferson",
    "email": "jeferson.viniciuscrc@gmail.com",
    "age": "18",
    "password": "1234567891",
    "createdAt": "2020-05-13T13:44:14.462Z",
    "updatedAt": "2020-05-13T14:40:41.602Z"
  },
  {	
    "id": 2,
    "username": "sebastiao",
    "email": "sebastiao.cunha@gmail.com",
    "age": "79",
    "password": "1234567891",
    "createdAt": "2020-05-13T13:44:14.462Z",
    "updatedAt": "2020-05-13T14:40:41.602Z"
  }
]
```

---

#### CREATE USER
`METHOD:` POST

`ENDPOINT:` /users

`BODY:`
| FIELD    | TYPE    |
|----------|---------|
| email    | string  |
| username | string  |
| age      | integer |
| password | string  |

`EXAMPLE BODY`: 
```
{	
  "username": "jeferson",
  "email": "jeferson.viniciuscrc@gmail.com",
  "age": "18",
  "password": "1234567891"
}
```

`RETURN:`
```
{	
  "id": 3,
  "username": "jeferson",
  "email": "jeferson.viniciuscrc@gmail.com",
  "age": "18",
  "password": "1234567891",
  "createdAt": "2020-05-13T13:44:14.462Z",
  "updatedAt": "2020-05-13T14:40:41.602Z"
}
```
---

#### UPDATE USER
`METHOD:` PUT

`ENDPOINT:` /users/:id

`BODY:`
| FIELD    | TYPE    |
|----------|---------|
| email    | string  |
| username | string  |
| age      | integer |
| password | string  |

`PARAMS:` 
- :id -> user id in server

`EXAMPLE BODY`: 
```
{	
  "username": "jeferson", (optional)
  "email": "jeferson.viniciuscrc@gmail.com", (optional)
  "age": "18", (optional)
  "password": "1234567891" (optional)
}
```

---

#### UPDATE USER
`METHOD:` DELETE

`ENDPOINT:` /users/:id

`PARAMS:` 
- :id -> user id in server

---

# Como executar?

## Clonando repositório

- `git clone https://github.com/jefersonvinicius/express-validator-study.git`
- `cd express-validator-study`
- `npm install && npm run sequelize db:migrate && npm run dev`
- A aplicação será servida em http://localhost:3333

## Docker 
Se você usa docker, pode simplesmente executar:
```
docker run -d --name app -p 3333:3333 jefersonvinicius/express-validator-study
```
A aplicação será servida em http://localhost:3333
