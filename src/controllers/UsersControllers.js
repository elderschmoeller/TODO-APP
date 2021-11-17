// const UsersModels = require("../../models/UsersModels");

class UsersControllers{
    show = (req, res) => {
        console.log(req.headers);
        res.send(
            'Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados'
        );
    };

    save = (req, res) => {
        const body = req.body;
        // let user = new UsersModels(req.body.nome, req.body.email, req.body.senha);
        // const email = req.body.email;
        // const senha = req.body.senha;
        // const nome = req.body.nome;


        res.send(`Rota POST de usuario ativada: usuário ${body.nome} de email ${body.email} adicionado ao banco de dados`);
    };
};

module.exports = new UsersControllers();

// if(req.body) {
//     console.log(req.body);
// } else {
//     res.send('É necessário um corpo de requisição.')
// }


// app.get('/users', function (req, res) {
//     res.send('Rota ativada com GET e recurso Usuário: valores de usuários devem ser retornados')
// })