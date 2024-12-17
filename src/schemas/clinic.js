const Joi = require("joi");

const createClinicSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    address: Joi.string().min(5).max(255).required()
});

module.exports = {
    createClinicSchema
};
