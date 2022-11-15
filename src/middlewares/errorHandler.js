module.exports = function errorHandler(err, req, res, next) {
  next();

  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  res.render('error', { error: err });
};
