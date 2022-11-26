const express = require('express');
const Pedido = require('../models/Pedido');
const router = express.Router();

router.get("/", async (req, res) => {
    const pedidos = await Pedido.find()
        .populate("Producto", ["nombre", "dueno"])
        .populate("user", ["name", "email"]);
    try {
        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({message: "No se pudieron obtener los pedidos"})
    }
});

router.get("/pedido/:id", async (req, res) => {
    const { id } = req.params;
    const singlePedido = await Pedido.findById(id);
    try {
        return res.status(200).json(singlePedido);
    } catch (error) {
        return res.status(500).json({message: "No se pudo obtener el pedido"})
    }
});

router.post("/pedido", async (req, res) => {
    const pedidoToCreate = await Pedido(req.body);
    try {
        return res.status(200).json(pedidoToCreate);
    } catch (error) {
        return res.status(500).json({message: "No se pudo crear el pedido"})
    }
});

router.put("/pedido/:id", async (req, res) => {
    const { id } = req.params;
    const pedidoToUpdate = await Pedido.findByIdAndUpdate(id, req.body,
        {new: true});
    try {
        return res.status(200).json(pedidoToUpdate);
    } catch (error) {
        return res.status(500).json({message: "No se pudo actualizar el pedido"})
    }
});

router.delete("/pedido/:id", async (req, res) => {
    const { id } = req.params;
    const pedidoToDelete = await Pedido.findByIdAndDelete(id);
    try {
        return res.status(200).json(pedidoToDelete);
    } catch (error) {
        return res.status(500).json({message: "No se pudo eliminar el pedido"})
    }
});

module.exports = router;