const {Schema, model} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    genres: {type: Array, required: true}
}, {versionKey: false})

module.exports = model('Users', schema)