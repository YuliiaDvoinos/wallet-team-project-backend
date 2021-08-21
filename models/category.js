const { Schema, model } = require('mongoose');

const categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [2, 'contact name must contain a minimum of 2 letters.'],
      required: [true, 'is required, set name for contact'],
    },
  },
  { versionKey: false },
);

module.exports = model('category', categorySchema);
