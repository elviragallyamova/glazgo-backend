


module.exports = class VacancyDto {
    name
    city
    salary
    schedule
    reason
    link

    constructor(model) {
        this.id = model._id
        this.name = model.name
        this.city = model.city
        this.salary = model.salary
        this.schedule = model.schedule
        this.reason = model.reason
        this.link = model.link
    }
}