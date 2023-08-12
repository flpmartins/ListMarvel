class GetCharactersByUserService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }
  async execute({ user_id }) {
    const characters = await this.characterRepository.getCharactersByUserId(user_id)

    return characters

  }

}

module.exports = GetCharactersByUserService