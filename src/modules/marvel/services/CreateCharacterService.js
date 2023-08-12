
class CreateCharacterService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }

  async execute({ name, description, characters, user_id }) {
    const character = await this.characterRepository.createCharacter({
      name,
      description,
      characters,
      user_id,
    })

    return character
  }
}

module.exports = CreateCharacterService