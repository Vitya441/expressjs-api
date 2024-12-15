const Joi = require("joi");

// Validation (JOI)

const createUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required() 
});

module.exports = {
    createUserSchema,
};