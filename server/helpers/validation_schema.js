const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  contactNumber: Joi.string().lowercase().required(),
  name: Joi.string().lowercase().required(),
  userName: Joi.string().lowercase().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
});

const bookSchema = Joi.object({
  name: Joi.string().lowercase().required(),
  author: Joi.string().lowercase().required(),
  availability: Joi.boolean().required(),
});

module.exports = {
  authSchema,
  bookSchema,
};
