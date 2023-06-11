const Joi = require('joi');

const orderSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required name field' }),
  email: Joi.string()
    .email()
    .required()
    .messages({ 'any.required': 'missing required email field' }),
  phone: Joi.string()
    .pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/, 'numbers')
    .required()
    .messages({ 'any.required': 'missing required phone field' }),
  address: Joi.string()
    .required()
    .messages({ 'any.required': 'missing required address field' }),
  totalCost: Joi.number(),
  order: Joi.array()
    .items({
      _id: Joi.string(),
      name: Joi.string(),
      price: Joi.number(),
      count: Joi.number(),
      total: Joi.number(),
      image: Joi.string(),
    })
    .required(),
});

module.exports = orderSchema;
