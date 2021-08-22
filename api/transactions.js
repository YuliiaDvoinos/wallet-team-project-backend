const express = require('express');
const { authenticate, asyncWrapper } = require('../middlewares');
const { transactions: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ POST /api/transactions
  .post('/', express.json(), authenticate, asyncWrapper(ctrl.addTransactions));
