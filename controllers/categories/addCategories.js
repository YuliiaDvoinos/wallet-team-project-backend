const { categories: service } = require('../../services');

module.exports = async ({ body }, res) => {
  const result = await service.addCategories(body);

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result,
    },
  });
};
