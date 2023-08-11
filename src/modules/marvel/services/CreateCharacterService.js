
class CreateCharacterService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }

  async execute({ name, description, user_id }) {
    const character = await this.characterRepository.createCharacter({
      name,
      description,
      user_id,
    })

    return character
  }
}

module.exports = CreateCharacterService