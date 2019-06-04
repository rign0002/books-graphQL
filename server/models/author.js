const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: String,
    age: Number
})


const Model = mongoose.model('Author', authorSchema)
module.exports = Model