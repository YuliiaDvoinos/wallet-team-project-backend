module.exports = async ({ user: { id, balance, token, email, name } }, res) => {
  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result: { id, name, email, balance, token },
    },
  });
};
