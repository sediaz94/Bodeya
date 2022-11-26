// import librerias
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require ('dotenv').config();

// establecer conexiones
mongoose.connect(process.env.MongoDB_URL)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(() => console.log("Error al conectar a la base de datos"));


// middlewares
app.use(cors());
app.use(express.json());

// rutas
// app.get("/", (req, res) => {
//     return res.json({message: 'Hola mundo'});
// });
app.use('/api/auth', require('./routes/user'));
app.use('/api/productos', require('./routes/producto'));
app.use('/api/rentals', require('./routes/rental'));
app.use('/api/books', require('./routes/book'));
app.use('/api/pedidos', require('./routes/pedido'));


// server
app.listen(process.env.PORT, () => {
    console.log('Servidor en puerto 5000');
});