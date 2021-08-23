const express = require('express');
const { authenticate, asyncWrapper } = require('../middlewares');
const { transactions: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/transactions
  .get('/', authenticate, asyncWrapper(ctrl.getTransactions))

  // @ GET /api/transactions/statistic
  // @ GET /api/transactions/statistic?month=00&year=0000
  .get('/', authenticate, asyncWrapper(ctrl.getTransactionsStatistic))

  // @ POST /api/transactions
  .post('/', express.json(), authenticate, asyncWrapper(ctrl.addTransactions));
