const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
})


const Model = mongoose.model('Book', bookSchema)
module.exports = Model