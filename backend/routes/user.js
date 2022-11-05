const router = require("express").Router()
const User = require("../model/User")
const Post = require("../model/Post")
const bcrypt = require("bcrypt")

// actualizar usuario

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(401).json("pues no puedes actualizar tu usuario")
  }
})

// eliminar usuario
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    // eliminar todos los post del usuario
    try {
      const user = await User.findById(req.params.id)
      try {
        await Post.deleteMany({ username: user.username })
        // eliminar solo el usuario
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("El usuario ha sido eliminado")
      } catch (error) {
        res.status(500).json(error)
      }
    } catch (error) {
      res.status(404).json("Usuario no encontrado")
    }
  } else {
    res.status(401).json("No puedes eliminar tu cuenta")
  }
})


// obtener un usuario
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...other } = user._doc
    res.status(200).json(other)
  } catch (error) {
    res.status(400).json(error)
  }
})
module.exports = router
