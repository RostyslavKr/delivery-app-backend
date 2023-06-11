const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, _, next) => {
    const body = req.body;

    const { error } = schema.validate(req.body);
    if (Object.keys(body).length === 0) {
      next(HttpError(400, 'missing fields'));
    }
    if (error) {
      next(HttpError(400, error.message));
    } else {
      next();
    }
  };

  return func;
};

module.exports = validateBody;
