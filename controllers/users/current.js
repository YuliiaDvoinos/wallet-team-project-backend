module.exports = async ({ user: { balance, token, email, name } }, res) => {
  return res.json({
    status: 'Success',
    code: 200,
    user: { name, email, balance },
    token,
  });
};
