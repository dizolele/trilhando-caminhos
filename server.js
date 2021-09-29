require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")


const userRoutes = require("./src/user/user.routes")
const dbConnect = require("./database")


dbConnect()

const server = express()
const port = process.env.serverPort_Url

server.use(express.json());


server.use('/trilhando', userRoutes)

server.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`)
})