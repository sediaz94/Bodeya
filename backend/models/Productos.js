const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productosSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        precio: {
            type: Number,
        },
        descripcion: {
            type: String,
        },
        cantidad: {
            type: Number,
        },
        categoria: {
            type: String,
        },
        imagen: {
            type: String,
        },
    },
    {
        collection: "productos",
    }
);

module.exports = mongoose.model("Productos", productosSchema);