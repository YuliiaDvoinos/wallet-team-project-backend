const { Transaction } = require('../models');

module.exports = {
  // add transaction
  addTransactions: (userId, body) =>
    Transaction.create({ owner: userId, ...body }),
  // get transactions
  getTransactions: userId =>
    Transaction.find({ owner: userId }).populate('category'),
};
