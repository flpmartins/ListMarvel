const AppError = require('../../../shared/AppError')
const connection = require('../../../shared/database/connection')

module.exports = {
async createCharacter(payload) {
  try {
    const character = await connection('personagens')
      .insert(payload)
      .returning('*')

    return character[0]
  } catch (err) {
    throw new AppError(err.message)
  }
},
async deletedCharacter(id) {
  try {
    return connection('personagens').where({ id }).del()
  } catch (err) {
    throw new AppError(err.message)
  }
},
async listAllCharacter() {
  try {
    return connection('personagens')
      .select('id', 'name', 'description', 'user_id')
  } catch (err) {
    throw new AppError(err.message)
  }
},

async getCharacterById(id, user_id) {
    try {
      return connection('personagens').where({ id }).andWhere({ user_id }).first()
    } catch (err) {
      throw new AppError(err.message)
    }
  }
  
}