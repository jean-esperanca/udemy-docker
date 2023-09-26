const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá from Docker!')
});

app.listen(port, () => {
    console.log(`Executando na Porta ${port}`)
});