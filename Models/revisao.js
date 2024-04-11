
const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    aluno: String,
    
   
})

const revisao = mongoose.model('revisao', Schema)

module.exports = revisao