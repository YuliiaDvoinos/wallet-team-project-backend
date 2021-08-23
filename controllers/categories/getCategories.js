const { categories: service } = require('../../services');

module.exports = async (_, res) => {
  const result = await service.getCategories();

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result,
    },
  });
};
