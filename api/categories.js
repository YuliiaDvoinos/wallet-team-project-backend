const express = require('express');
const { authenticate, asyncWrapper } = require('../middlewares');
const { categories: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/categories
  .get('/', authenticate, asyncWrapper(ctrl.getCategories))

  // @ POST /api/categories (technical route)
  .post('/', express.json(), authenticate, asyncWrapper(ctrl.addCategories));
