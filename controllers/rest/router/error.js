module.exports = (err, req, res, next) => {
  res.status(err.data ? err.data.code || 500 : 500);
  res.json(err);
};