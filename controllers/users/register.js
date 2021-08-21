const { users: service } = require('../../services');

module.exports = async ({ body: { email, password, name } }, res) => {
  const user = await service.getUser({ email });
  if (user) {
    return res.status(409).json({
      status: 'Conflict',
      code: 409,
      message: 'user already registered',
    });
  }

  const { _id } = await service.register({
    email,
    password,
    name,
  });

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result: {
        _id,
        email,
        name,
      },
    },
  });
};
