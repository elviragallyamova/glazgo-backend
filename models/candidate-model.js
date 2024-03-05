const {Schema, model} = require('mongoose')

const candidateSchema = new Schema({
    attachedDate: {type: Date, default: Date.now},
    surname: {type: String, required: true},
    firstName: {type: String, required: true},
    patronymic: {type: String},
    birthday: {type: Date},
    email: {type: String},
    phone: {type: String, required: true},
    status: {type: String, enum: ['new', 'сall', 'thirdNotDialer', 'cvAtSv', 'traineeship', 'onboarding', 'rejection', 'personnelReserve'], default: 'new', required: true},
    vacancy: {type: Schema.Types.ObjectId, ref: 'Vacancy', required: true}
})

module.exports = model('Candidate', candidateSchema)