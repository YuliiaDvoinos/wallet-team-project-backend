const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = Schema(
  {
    balance: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: 6,
    },
    name: {
      type: String,
      minlength: [2, 'contact name must contain a minimum of 2 letters.'],
      required: [true, 'is required, set name for user'],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false },
);

userSchema.methods.hashPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model('user', userSchema);
