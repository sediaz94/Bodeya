const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const multer = require("multer")
const path = require("path")

//Rutas
const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCat = require("./routes/categories")

dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

//Coneccion a db
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*  useCreateIndex: true,
    useFindAndModify: true,*/
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

// guardado de archivos
const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    //callb(null, "file.png")
    callb(null, req.body.name)
  },
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

//Rutas
app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/category", authCat)

//Servidor
app.listen("5000", () => {
  console.log("Bakcken esta corriendo")
})
