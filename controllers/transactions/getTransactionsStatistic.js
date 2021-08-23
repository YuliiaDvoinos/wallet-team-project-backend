// const { transactions: service } = require('../../services');

module.exports = async (req, res) => {
  //   const result = await service.getTransactions(id);
  const result = 'test';

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result,
    },
  });
};
