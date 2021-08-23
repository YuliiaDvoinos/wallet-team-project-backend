const { Category } = require('../models');

module.exports = {
  // add category
  addCategories: body => Category.create(body),
  // get category
  getCategories: () => Category.find({}),
};
