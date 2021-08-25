module.exports = async ({ user: { email, name, balance } }, res) => {
  return res.json({
    name,
    email,
    balance,
  });
};
