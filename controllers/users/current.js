module.exports = async ({ user: { id, email, name } }, res) => {
  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result: { id, email, name },
    },
  });
};
