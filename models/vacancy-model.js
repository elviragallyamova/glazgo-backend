const {Schema, model} = require('mongoose')

const vacancySchema = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['open', 'suspend', 'close'], default: 'open'},
    city: {type: String, required: true},
    salary: {type: Number, required: true},
    schedule: {type: String, required: true, enum: ['5/2', '3/2', '2/2']},
    reason: {type: String, required: true, enum: ['expansion', 'dismissal', 'promotion']},
    createdAt: {type: Date, default: Date.now, immutable: true},
    recruiter: {type: Schema.Types.ObjectId, ref: 'User'},
    customer: {type: Schema.Types.ObjectId, ref: 'User'},
    candidate: {type: Schema.Types.ObjectId, ref: 'Candidate'},
})

module.exports = model('Vacancy', vacancySchema)