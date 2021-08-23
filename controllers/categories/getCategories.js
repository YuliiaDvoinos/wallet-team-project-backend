const { categories: service } = require('../../services');


module.exports = async (req, res, next) => {
  try {
    const result = await service.getCategories()

    return res.json({
      status: 'success',
      code: 200,
      data: {
        result
      },
    })
  } catch (e) {
    next(e)
  }
}