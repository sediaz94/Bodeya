const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    Numpages: {
        type: Number,
    }
});

module.exports = model("Book", BookSchema);