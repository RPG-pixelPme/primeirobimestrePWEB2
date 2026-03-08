const express = require('express');
const app = express();
const port = 3300

app.get('/', (req, res)=>
{
    res.send('Bem vindo ao Grande Servidor');  
})

app.listen(port, ()=> 
{
    console.log('Servidor Iniciado com Sucesso!');
})