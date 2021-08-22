const express = require('express');
const { authenticate, asyncWrapper } = require('../middlewares');
const { transactions: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/transactions
  .get('/', authenticate, asyncWrapper(ctrl.getTransactions))

  // @ POST /api/transactions
  .post('/', express.json(), authenticate, asyncWrapper(ctrl.addTransactions));
