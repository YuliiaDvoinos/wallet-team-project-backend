module.exports = async ({ user: { email, name, balance } }, res) => {
  return res.json({
    status: 'Success',
    code: 200,
    user: { name, email, balance },
  });
};
