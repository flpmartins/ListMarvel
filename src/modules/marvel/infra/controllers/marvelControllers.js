
const MarvelServices = require('../../services/MarvelServices')
const CreateCharacterService = require('../../services/CreateCharacterService')
const DeleteCharacterService = require('../../services/DeleteCharacterService')
const GetCharactersService = require('../../services/GetCharactersService')
const GetCharacterByUserService = require('../../services/GetCharacterByUserService')

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

    const {name, description} = request.body
    const{ id } = request.user

    const createCharacterService = new CreateCharacterService(characterRepository)
    const characterCreated = await createCharacterService.execute({
      name,
      description,
      user_id:id,
    })
    return response.json({data: characterCreated})
  },

  async deletedCharacter(request, response) {

  const { personagemId  } = request.params
  const { id } =request.user

  const deleteCharacterService = new DeleteCharacterService(characterRepository)

  await deleteCharacterService.execute({id: personagemId, user_id: id})

    return response.json({message:'deleted character'})
  },
  async updatedCharacter(request, response) {
    return response.json({message:'Updated character'})
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

  async getCharacters(request, response) {
  const { id } = request.params
  const { user_id } = request.user

  const getCharactersService = new GetCharactersService(characterRepository)

  const Characterlist = await getCharactersService.execute({
    id ,
    user_id
  })
  return response.json({ data: Characterlist })
},
}