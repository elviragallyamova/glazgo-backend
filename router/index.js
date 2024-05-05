const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const VacancyController = require('../controllers/vacancy-controller')
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')
const roleMiddleware = require('../middlewares/role-middleware')
const CandidateController = require('../controllers/candidate-controller')

const router = new Router()

// authorization
router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    // roleMiddleware,
    UserController.registration)
router.get('/activate/:link', UserController.activate)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers)

// vacancies
router.post('/vacancies', VacancyController.create)
router.get('/vacancies', VacancyController.getAll)
router.get('/vacancies/:id', VacancyController.getOne)
router.put('/vacancies/:id', VacancyController.update)
router.delete('/vacancies/:id', VacancyController.delete)

// candidates
router.post('/candidates', CandidateController.create)
router.get('/candidates', CandidateController.getAll)
router.get('/vacancy/:id/candidates', CandidateController.getForVacancy)
router.get('/candidates/:id', CandidateController.getOne)
router.put('/candidates/:id', CandidateController.update)
router.delete('/candidates/:id', CandidateController.delete)

module.exports = router
