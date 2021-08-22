const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
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
      type: String,
      enum: [
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
      ],
      default: 'other',
      required: [true, 'Category is required'],
    },
    money: {
      type: Number,
      min: 0,
      required: [true, 'Money is required'],
    },
  },
  { versionKey: false },
);

module.exports = model('transaction', transactionSchema);
