const { users: service } = require('../../services');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async ({ body: { email, password, name } }, res) => {
  const userExists = await service.getUser({ email });
  if (userExists) {
    return res.status(409).json({
      status: 'Conflict',
      code: 409,
      message: 'user already registered',
    });
  }

  const user = await service.register({ email, password, name });

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
  await service.updateUser(user._id, { token });

  return res.status(201).json({
    status: 'Created',
    code: 201,
    user: { name: user.name, email: user.email },
    token,
  });
};
