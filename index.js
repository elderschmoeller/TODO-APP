const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('ToDo APP API')
})

app.get('/users', function (req, res) {
  res.send('Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados')
})

app.get('/tasks', function (req, res) {
  res.send('Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornadas')
})

app.listen(3002, () => {
   console.log('Servidor rodando')
})
