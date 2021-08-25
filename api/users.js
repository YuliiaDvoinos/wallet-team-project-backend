const express = require('express');
const {
  authenticate,
  asyncWrapper,
  validateUsers: validate,
} = require('../middlewares');
const { users: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/users/current
  .get('/current', authenticate, asyncWrapper(ctrl.current))

  // @ POST /api/users/register
  .post(
    '/register',
    express.json(),
    validate.registerUser,
    asyncWrapper(ctrl.register),
  )

  // @ POST /api/users/login
  .post('/login', express.json(), validate.loginUser, asyncWrapper(ctrl.login))

  // @ POST /api/users/logout
  .post('/logout', authenticate, asyncWrapper(ctrl.logout));
