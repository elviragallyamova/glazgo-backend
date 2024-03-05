const VacancyModel = require('../models/vacancy-model')
const FileService = require('../services/file-service')

class VacancyService {
    async create(vacancy, link) {
        // const fileService =  FileService.saveFile(link)
        const createdVacancy = await VacancyModel.create(vacancy)
        return createdVacancy
    }

    async getAll() {
        const vacancies = await VacancyModel.find()
        return vacancies
    }

    async getOne(id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id вакансии')
        }
        const vacancy = await VacancyModel.findById(id)
        return vacancy
    }

    async update(vacancy, id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id вакансии')
        }
        const updatedVacancy = await VacancyModel.findByIdAndUpdate(id, vacancy, {new: true})
        return updatedVacancy
    }

    async delete(id) {
        if (!id) {
            throw ApiError.BadRequest('Не указан id вакансии')
        }
        const deletedVacancy = await VacancyModel.findByIdAndDelete(id)
        return deletedVacancy
    }
}

module.exports = new VacancyService()