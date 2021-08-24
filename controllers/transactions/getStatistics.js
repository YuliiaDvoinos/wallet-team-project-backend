const { transactions: service } = require('../../services');

module.exports = async ({ user: { id }, query: { month, year } }, res) => {
  let totalIncomeArr;
  let totalSpendArr;

  const amountMoney = array => array.reduce((acc, { money }) => acc + money, 0);
  const amountCategories = array =>
    array.reduce((acc, value) => {
      const category = value.category.name;
      const { money } = value;

      acc[category]
        ? (acc[category] = acc[category] += money)
        : (acc[category] = money);

      return acc;
    }, {});

  if (month && year) {
    totalIncomeArr = await service.getAllIncomeByDate(id, month, year);
    totalSpendArr = await service.getAllSpendByDate(id, month, year);
  } else {
    totalIncomeArr = await service.getAllIncome(id);
    totalSpendArr = await service.getAllSpend(id);
  }

  const totalIncome = amountMoney(totalIncomeArr);
  const totalSpend = amountMoney(totalSpendArr);
  const categoriesSummary = amountCategories(totalSpendArr);

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      totalIncome,
      totalSpend,
      categoriesSummary,
    },
  });
};
