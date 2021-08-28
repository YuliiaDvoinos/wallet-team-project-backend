const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    month: {
      type: String,
      default: new Date().toLocaleDateString().slice(3, 5),
    },
    year: {
      type: String,
      default: new Date().toLocaleDateString().slice(6),
    },
    comment: {
      type: String,
      default: '',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    type: {
      type: String,
      enum: ['spend', 'income'],
      default: 'income',
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true,
    },
    // category: {
    //   type: String,
    //   enum: [
    //     'main',
    //     'food',
    //     'car',
    //     'development',
    //     'children',
    //     'house',
    //     'education',
    //     'leisure',
    //     'other',
    //     'regularIncome',
    //     'irregularIncome',
    //   ],
    //   default: 'other',
    //   required: [true, 'Category is required'],
    // },
    money: {
      type: Number,
      min: 0,
      required: [true, 'Money is required'],
    },
    prevBalance: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = model('transaction', transactionSchema);
