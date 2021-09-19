require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const trilhasRoutes = require("./src/trilhas/trilhas.routes")
const userRoutes = require("./src/user/user.routes")
const dbConnect = require("./database")

dbConnect()

const server = express()
const port = process.env.serverPort_Url

// server.use(trilhasRoutes)
// server.use(userRoutes)

server.get('/', (req, res) => {
    res.send('Aqui será listada todas trilhas')
})

server.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`)
})