const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const PedidoSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        producto: {
            type: Schema.Types.ObjectId,
            ref: "Producto",
            required: true
        }
    }
)

module.exports = model("Pedido", PedidoSchema);