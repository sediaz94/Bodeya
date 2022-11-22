let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Modelo Producto
let productosSchema = require("../models/Productos");

// Crear Producto
router.route("/create-producto").post((req, res, next) => {
    productosSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// Leer Producto
router.route("/").get((req, res, next) => {
    productosSchema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Obtener un Producto
router.route("/edit-producto/:id").get((req, res, next) => {
    productosSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Actualizar Producto
router.route("/update-producto/:id").put((req, res, next) => {
    productosSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body,
    }, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log("Producto updated successfully !");
        }
    });
});

// Eliminar Producto
router.route("/delete-producto/:id").delete((req, res, next) => {
    productosSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = router;