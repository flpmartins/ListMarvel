
const MarvelServices = require('../../services/MarvelServices')
const CreateCharacterService = require('../../services/CreateCharacterService')
const DeleteCharacterService = require('../../services/DeleteCharacterService')
const GetCharactersByUserService = require('../../services/GetCharactersByUserService')
const GetCharacterByUserService = require('../../services/GetCharacterByUserService')
const UpdateCharacterService = require('../../services/UpdateCharacterService')

const characterRepository = require('../../repositories/character.repository')

module.exports = {
  getAllCharacters: async (req, res) => {
    try {
      const { nameStartsWith } = req.query
      const characters = await MarvelServices.getAllCharacters(nameStartsWith)

      res.json(characters)
    } catch (error) {
      console.error('Error:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },

  getCharactersBasicInfo: async (req, res) => {
    try {
      const { nameStartsWith } = req.query
      const characters = await MarvelServices.getCharactersBasicInfo(nameStartsWith)

      res.json(characters)
    } catch (error) {
      console.error('Error:', error.message)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  },
  async createCharacter(request, response) {

    const { name, description, characters } = request.body
    const { id } = request.user

    const createCharacterService = new CreateCharacterService(characterRepository)

    const characterCreated = await createCharacterService.execute({
      name,
      description,
      characters: JSON.stringify(characters),
      user_id: id
    })
    return response.json({ data: characterCreated })
  },

  async deletedCharacter(request, response) {

    const { personagemId } = request.params
    const { id } = request.user

    const deleteCharacterService = new DeleteCharacterService(characterRepository)

    await deleteCharacterService.execute({ id: personagemId, user_id: id })

    return response.json({ message: 'deleted character' })
  },

  async updatedCharacter(request, response) {
    const { name, description, characters } = request.body
    const { personagemId } = request.params
    const { id } = request.user

    const updateCharacters = new UpdateCharacterService(characterRepository)

    const charactersUpdated = await updateCharacters.execute({
      id: personagemId,
      name,
      description,
      characters,
      user_id: id
    })

    return response.json({ data: charactersUpdated })
  },

  async getCharacterByUser(request, response) {
    const { personagemId } = request.params
    const { id } = request.user

    const getcharacterByUserService = new GetCharacterByUserService(characterRepository)

    const character = await getcharacterByUserService.execute({
      id: personagemId,
      user_id: id,
    })
    return response.json({ data: character })
  },

  async getCharactersByUser(request, response) {
    const { id } = request.user

    const getCharactersService = new GetCharactersByUserService(characterRepository)

    const characters = await getCharactersService.execute({ user_id: id })

    return response.json({ data: characters })
  },


}