class GetCharactersService {
  constructor(characterRepository) {
    this.characterRepository = characterRepository
  }
  async execute({id, user_id}) {
    const personagem = await this.characterRepository.listAllCharacter(id, user_id)

  return personagem

}

}

module.exports = GetCharactersService