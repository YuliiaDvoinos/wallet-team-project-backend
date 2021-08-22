const { Transaction } = require('../models');

module.exports = {
  // add transaction
  addTransaction: (userId, body) =>
    Transaction.create({ owner: userId, ...body }),
};
