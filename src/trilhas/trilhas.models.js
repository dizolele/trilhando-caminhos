const mongoose = require("mongoose")

const trilhaSchema = new mongoose.Schema({
    nomeTrilha: {
        type: String,
        required: true
    },
    regiao: {
        type: String,
        required: true
    },
    pontoPartida: {
        type: String,
        required: true
    },
    diasAventura: {
        type: String,
        required: true
    },
    km: {
        type: String,
        required: true
    },
    nivelDificuldade: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    comentarios:{
        type: Array
    },
    avaliacao:{
        type:Array
    },
    dataPublicacao: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Trilha", trilhaSchema)