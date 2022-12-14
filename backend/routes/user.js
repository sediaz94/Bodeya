const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { generateJwt } = require("../helpers/processJwt");

router.get("/", async (req, res) => {
  const users = await User.find();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get users" });
  }
});

router.post("/signup", async (req, res) => {
  const { email } = req.body;
  const testEmail = await User.findOne({ email });
  if (testEmail) {
    return res
      .status(500)
      .json({ mesage: "No se pudo registrar, por favor inténtalo de nuevo" });
  }
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(req.body.password, salt);
    user.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "No es posible crear el usuario" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(500).json({ message: "Por favor revice las credenciales" });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(500).json({ message: "Por favor revice las credenciales" });
  }
  const token = await generateJwt(user._id);
  return res.status(200).json({ token, user });
});

module.exports = router;
