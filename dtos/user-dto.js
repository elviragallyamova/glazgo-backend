
module.exports = class UserDto {
    surname
    firstName
    patronymic
    role
    id
    isActivated

    constructor(model) {
        this.surname = model.surname
        this.firstName = model.firstName
        this.patronymic = model.patronymic
        this.role = model.role
        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated
    }
}