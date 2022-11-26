const express = require('express');
const Producto = require('../models/Producto');
const router = express.Router();

// Traer todos los productos
// .../api/productos
router.get('/', async (req, res) => {
    const productos = await Producto.find();
    try {
        return res.status(200).json(productos)
    } catch (error) {
        return res.status(500).json({message: "No se pudieron obtener los productos"});
    }
});

// GET/producto/:id -> singleProducto
router.get('/producto/:id', async (req,res) => {
    const { id } = req.params;
    const singleProducto = await Producto.findById(id);
    try {
        return res.status(200).json(singleProducto);
    } catch (error) {
        return res.status(500).json({message: "No se pudo obtener el producto"})
    }
})

// GET/productoById
// .../api/productos/producto
router.post("/producto", async (req, res) => {
    const productoToCreate = await Producto.create(req.body);
    try {
        return res.status(201).json(productoToCreate);
    } catch (error) {
        return res.status(500).json({message: "No se pudo crear el producto"});
    }
})

// PUT/producto -> update
router.put("/producto/:id", async (req, res) => {
    const { id } = req.params;
    const productoToUpdate = await Producto.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(productoToUpdate);
    } catch (error) {
        return res.status(500).json({message: "No se pudo actualizar el producto"});
    }
})

// DELETE/producto/Id
router.delete("/producto/:id", async (req, res) => {
    const { id } = req.params;
    const productoToDelete = await Producto.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "Producto eliminado con éxito"})
    } catch (error) {
        return res.status(500).json({message: "No se pudo eliminar el producto"})        
    }
})

module.exports = router;