const { users, transactions: service } = require('../../services');

module.exports = async ({ body, user: { id, balance } }, res) => {
  const result = await service.addTransactions(id, body, balance);

  if (result.type === 'income') {
    const updateBalance = (balance += result.money);
    await users.updateUser(id, { balance: updateBalance });
  }
  if (result.type === 'spend') {
    const updateBalance = (balance -= result.money);
    await users.updateUser(id, { balance: updateBalance });
  }

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result,
    },
  });
};
