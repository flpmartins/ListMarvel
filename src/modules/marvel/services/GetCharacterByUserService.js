class GetCharacterByUserService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }

  async execute({ id, user_id }) {
    const personagem = await this.characterRepository.getCharacterById(id, user_id)

    return personagem
  }
}
module.exports = GetCharacterByUserService