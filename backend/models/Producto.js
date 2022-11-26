const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    dueno : {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

module.exports = model("Producto", ProductoSchema);