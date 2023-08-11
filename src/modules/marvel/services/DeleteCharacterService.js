const AppError = require('../../../shared/AppError')

class DeletePersonagemService {
  constructor (characterRepository) {
    this.characterRepository = characterRepository
  }
async execute({id, user_id}) {
  const Character = await this.characterRepository.getCharacterById(id, user_id)
  if (!Character) {
    throw new AppError('personagem not found')
    
  }
  const deletedCharacter = await this.characterRepository.deletedCharacter(id)

    return deletedCharacter
}
}
module.exports = DeletePersonagemService