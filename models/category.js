const { Schema, model } = require('mongoose');

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'category name is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = model('category', categorySchema);
