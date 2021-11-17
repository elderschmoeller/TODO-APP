const TasksModel = require('../models/tasksModel');
const { tasksDB } = require('../infra/bd');

class TasksControllers {
    constructor(dbConn) {
        this.dbConn = dbConn;
    }

    show = (req, res) => {
        res.send(this.dbConn); // dbConn é toda a informação que tem no banco que passamos no POST
        };

        save = (req, res) => {
            const {title, description, status} = req.body;

            const tasks = new TasksModel(title, description, status);

            // salva no banco
            this.dbConn.push(tasks);

            res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
        }
    };
    
    
module.exports = new TasksControllers(tasksDB);

// app.get('/tasks', function (req, res) {
//     res.send('Rota ativada com GET e recurso Tarefas: valores de tarefas devem ser retornadas')
// })