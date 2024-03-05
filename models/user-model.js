const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    surname: {type: String, required: true},
    firstName: {type: String, required: true},
    patronymic: {type: String},
    role: {type: String, enum: ['customer', 'recruiter']},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
})

module.exports = model('User', userSchema)