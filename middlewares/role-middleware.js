const ApiError = require('../exceptions/api-error')
const UserModel = require('../models/user-model')

module.exports = async function(req, res, next) {
    try {
        const userId = req.body
        console.log('userId', userId)
        // if (!userId) {
        //     return next(ApiError.UnauthorizedError())
        // }

        let currentUser

        const userRole = req.body.role
        if (userRole === 'customer') {
            currentUser = await UserModel.findById(userId)
            // if (!currentUser) {
            //   return next(ApiError.UnauthorizedError())
            // }
            console.log('currentUser', currentUser)
            return currentUser
        }

        req.currentUser = currentUser
        next()
    } catch (e) {
        // return next(ApiError.UnauthorizedError())
        console.log('error', e)
    }
}