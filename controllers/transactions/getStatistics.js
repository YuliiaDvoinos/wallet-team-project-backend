const { transactions: service } = require('../../services');

module.exports = async ({ user: { id }, query: { month, year } }, res) => {
  let totalIncome;
  let totalSpend;

  const amount = array => array.reduce((acc, { money }) => acc + money, 0);

  if (month && year) {
    totalIncome = amount(await service.getAllIncomeByDate(id, month, year));
    totalSpend = amount(await service.getAllSpendByDate(id, month, year));
  } else {
    totalIncome = amount(await service.getAllIncome(id));
    totalSpend = amount(await service.getAllSpend(id));
  }

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      totalIncome,
      totalSpend,
    },
  });
};
