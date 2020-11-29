const express = require('express');
const app = express();

app.use('/', (req, res) => res.send('Esta API funciona') );

app.listen(5000, () => console.log("Servidor iniciado en http://localhost:5000"));