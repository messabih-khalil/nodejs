

exports.checkBody = (req, res, next) => {
  console.log(req.body);
  if (!req.body.title || !req.body.body) {
    return res.status(404).json({
      message: "invalid body",
    });
  }
  next();
};
