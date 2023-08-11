const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  verifyPayloadForCreation() {
    return celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        description: Joi.string().allow(null, ''),
      },
    })
  },
  verifyCharacterIdInParams() {
    return celebrate({
      [Segments.PARAMS]: {
        personagemId: Joi.string().required(),
      },
    })
  },
}