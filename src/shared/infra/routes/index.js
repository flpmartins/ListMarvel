const { Router } = require('express')

const userRouters = require('../../../modules/users/infra/routes/user.routes')
const loginRouter = require('../../../modules/users/infra/routes/login.routes')
const MarvelRouter = require('../../../modules/marvel/infra/routes/marvel.routes')
const ensureAuthenticated = require('../../middlewares/ensure-autenticated')


const routes = Router()

routes.use('/users', userRouters)

routes.use('/login', loginRouter)

routes.use(ensureAuthenticated)

routes.use('/marvel', MarvelRouter)

module.exports = routes
