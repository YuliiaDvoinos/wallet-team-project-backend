// const { Category } = require('../models');

module.exports = {
    //getCategory
    getCategories: () => {
        const list = [
        'main',
        'food',
        'car',
        'development',
        'children',
        'house',
        'education',
        'leisure',
        'other',
        'regularIncome',
        'irregularIncome',
        ]
        return list;
    }
};