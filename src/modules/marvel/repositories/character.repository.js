const AppError = require('../../../shared/AppError')
const connection = require('../../../shared/database/connection')

module.exports = {
  async createCharacter(payload) {
    try {
      const character = await connection('characters')
        .insert(payload)
        .returning('*')

      return character[0]
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async deletedCharacter(id) {
    try {
      return connection('characters').where({ id }).del()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async getCharacterById(id, user_id) {
    try {
      return connection('characters').where({ id }).andWhere({ user_id }).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async getCharactersByUserId(user_id) {
    try {
      return connection('characters').where({ user_id })
    } catch (err) {
      throw new AppError(err.message)
    }
  },

  async updateCharacters(payload) {
    try {
      const characters = await connection('characters').update(payload).where({ id: payload.id }).returning('*')

      return characters[0]


    } catch (err) {
      throw new AppError(err.message)
    }
  }
}