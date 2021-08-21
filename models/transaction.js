const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    date: {
      type: Date,
      min: '2021-08-20',
      required: [true, 'Date is required'],
    },
    type: {
      type: String,
      enum: ['spend', 'income'],
      default: 'spend',
      required: [true, 'Type is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    comment: {
      type: String,
      maxlength: 300,
      default: '',
    },
    money: {
      type: Number,
      required: [true, 'Money is required'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = model('transaction', transactionSchema);
