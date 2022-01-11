const Joi = require('@hapi/joi');
Joi.objectid = require('joi-objectid')(Joi);
module.exports.createUserSchema = Joi.object({
name: Joi.string().alphanum().min(3).max(20).required(),

});

module.exports.userIdSchema = Joi.object({
  id: Joi.objectid().required(),
  });
  