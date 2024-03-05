const VacancyService = require('../services/vacancy-servise')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')
const CandidateServise = require('../services/candidate-servise')

class CandidateController {
    async create(req, res, next) {
        try {
            const candidate = await CandidateServise.create(req.body)
            return res.json(candidate)
        } catch (e) {
            res.status(500).json(e) // TODO разобраться с выводом ошибок
            // next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const candidates = await CandidateServise.getAll()
            return res.json(candidates)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const candidate = await CandidateServise.getOne(req.params.id)
            return res.json(candidate)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const updatedCandidate= await CandidateServise.update(req.body, req.params.id)
            return res.json(updatedCandidate)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const candidate = await CandidateServise.delete(req.params.id)
            return res.json(candidate)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CandidateController()