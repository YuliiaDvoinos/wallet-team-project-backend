const { transactions: service } = require('../../services');

module.exports = async ({ body, user: { id } }, res) => {
  const result = await service.addTransactions(id, body);

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result,
    },
  });
};
