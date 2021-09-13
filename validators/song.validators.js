const { Joi } = require("express-validation");

const SongValidators = {
  validateCreate: {
    body: Joi.object({
      genre: Joi.string().max(80),
      titre: Joi.string().max(80).required(),
      duree: Joi.number().integer().min(0),
      auteur: Joi.string().max(100).required()
    }),
  },
  validateUpdate: {
    params: Joi.object({
      guid: Joi.string().guid().required(),
    }),
    body: Joi.object({
      genre: Joi.string().max(80),
      titre: Joi.string().max(80).required(),
      duree: Joi.number().integer().min(0),
      auteur: Joi.string().max(100).required()
    }),
  }
};

module.exports = SongValidators;
