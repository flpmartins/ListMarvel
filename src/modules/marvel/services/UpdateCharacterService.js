const AppError = require("../../../shared/AppError")

class UpdateCharacterService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }

  async execute({ id, name, description, characters, user_id }) {

    const Character = await this.characterRepository.getCharacterById(id, user_id)
    if (!Character) {
      throw new AppError('personagem not found')

    }

    const characterUpdated = await this.characterRepository.updateCharacters({
      id,
      name,
      description,
      characters: JSON.stringify(characters),
      user_id
    })

    return characterUpdated
  }
}

module.exports = UpdateCharacterService