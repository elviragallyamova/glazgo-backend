const {Schema, model} = require('mongoose')

const vacancySchema = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['open', 'suspend', 'close'], default: 'open'},
    city: {type: String, required: true},
    salary: {type: Number, required: true},
    schedule: {type: String, required: true, enum: ['5/2', '3/2', '2/2']},
    reason: {type: String, required: true, enum: ['expansion', 'dismissal', 'promotion']},
})

module.exports = model('Vacancy', vacancySchema)