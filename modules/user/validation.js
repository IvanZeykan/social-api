const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).required(),
});

const validateCreateUser = (body) => {
  const validation = schema.validate(body);
  if (validation.error) {
    return validation.error;
  }
  return null;
};

module.exports = { validateCreateUser }