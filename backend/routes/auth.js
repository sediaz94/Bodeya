const Router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Registro
Router.post('/register', async (req, res) => {
    try {
        // Generar nuevo password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // Crear nuevo usuario
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        // Guardar usuario y responder
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
Router.post('/login', async (req, res) => {
    try {
        // Encontrar usuario
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json("Usuario no encontrado");

        // Validar contraseña
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Contraseña incorrecta");
            
        // Responder
        res.status(200).json({ _id: user._id, username: user.username });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = Router;


