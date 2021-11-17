const express = require('express');

const UsersController = require('./controllers/UsersControllers');
const TasksController = require('./controllers/TaskControllers');

const app = express();
const {APP_PORT, APP_NAME} = require('./util/appConfig');

// Usar o Middleware sempre no meio do código
app.use((req, res, next) => { // Isso é um middleware
  console.log(req.headers.host, new Date().toLocaleTimeString());
  next(); // Sempre que for criar um middleware user essa função. 'next()'
});

app.use(express.json()); // imprimir as requisições feitas pelo usuário // Sempre usar o express.json com app.use

app.get('/', (req, res) => {
  res.send('ToDo APP API');
});

app.get("/users", UsersController.show);
app.post("/users", UsersController.save);

app.get("/tasks", TasksController.show);
app.post("/tasks", TasksController.save);


app.listen(APP_PORT, function() {
  console.log(`${APP_NAME} listening at http://localhost:${APP_PORT}`);
});

// app.listen(3002, () => {
//    console.log('Servidor rodando')
// })
