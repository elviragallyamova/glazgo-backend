const VacancyService = require('../services/vacancy-servise')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class VacancyController {
    async create(req, res, next) {
        try {
            const vacancy = await VacancyService.create(req.body)
            return res.json(vacancy)
        } catch (e) {
            res.status(500).json(e) // TODO разобраться с выводом ошибок
            // next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            const vacancies = await VacancyService.getAll()
            return res.json(vacancies)
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const vacancy = await VacancyService.getOne(req.params.id)
            return res.json(vacancy)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const updatedVacancy = await VacancyService.update(req.body, req.params.id)
            return res.json(updatedVacancy)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const vacancy = await VacancyService.delete(req.params.id)
            return res.json(vacancy)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new VacancyController()