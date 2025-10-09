const express = require('express');
const jsonfile = require('jsonfile');
const app = express();

const port = 3000;
const bd = './banco.json';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/alunos', (req, res) => {
    const dados = jsonfile.readFileSync(bd);
    res.json(dados.alunos);
});

app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Retornando os dados do aluno de ID ${id}`);
});

app.post('/alunos', (req, res) => {
    const aluno = {
        id: Date.now(),
        nome: req.body.nome,
        email: req.body.email
    };

    const dados = jsonfile.readFileSync(bd);
    dados.alunos.push(aluno);
    jsonfile.writeFileSync(bd, dados);

    res.json(aluno);
});

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Atualizando o aluno de ID ${id}`);
});

app.patch('/alunos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Atualizando parcialmente o aluno de ID ${id}`);
});

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Removendo o aluno de ID ${id}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
