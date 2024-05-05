const CandidateModel = require('../models/candidate-model')
const UserModel = require('../models/user-model')
const VacancyModel = require('../models/vacancy-model')
const FileService = require('./file-service')

class CandidateService {
    async create(candidate, link) {
        // const fileService =  FileService.saveFile(link)
        const recruiter = await UserModel.findOne({role: 'recruiter'})
        candidate.recruiter = recruiter._id
        const createdCandidate = await CandidateModel.create(candidate)
        return createdCandidate
    }

    async getAll() {
        const candidates = await CandidateModel.find()
        return candidates
    }

    async getForVacancy(id) {
        console.log('id', id)
        const candidates = await CandidateModel.find({vacancy: id})
        console.log('candidates', candidates)
        return candidates
    }

    async getOne(id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id кандидата')
        }
        const candidate = await CandidateModel.findById(id).populate({path: 'vacancy recruiter', select: 'name surname firstName patronymic'}).exec()
        return candidate
    }

    async update(candidate, id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id кандидата')
        }
        const updatedCandidate = await CandidateModel.findByIdAndUpdate(id, candidate, {new: true})
        return updatedCandidate
    }

    async delete(id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id кандидата')
        }
        const deletedCandidate = await CandidateModel.findByIdAndDelete(id)
        return deletedCandidate
    }
}

module.exports = new CandidateService()