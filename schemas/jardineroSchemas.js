const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string();
const phone =  Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password =  Joi.string();

const getJardineroSchema = Joi.object({
  id: id.required(),
});

const createJardineroSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateJardineroSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

module.exports = { getJardineroSchema, createJardineroSchema, updateJardineroSchema };