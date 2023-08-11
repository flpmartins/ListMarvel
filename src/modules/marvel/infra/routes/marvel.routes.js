const {Router} = require('express')
const {
 updatedCharacter,
 createCharacter,
 getAllCharacters,
 getCharacterByUser,
 getCharacters,
 deletedCharacter,
 getCharactersBasicInfo
  } = require('../controllers/marvelControllers')


const {verifyPayloadForCreation, verifyCharacterIdInParams} = require('../../middlewares/character.middleware')


const MarvelRouter = Router()

MarvelRouter.get('/characters', getAllCharacters);

MarvelRouter.get('/characters/basic', getCharactersBasicInfo); // Novo endpoint

MarvelRouter.post('/characters/salve',verifyPayloadForCreation(), createCharacter)

MarvelRouter.delete('/:personagemId',verifyCharacterIdInParams(), deletedCharacter)

MarvelRouter.put('/characters/updatedPersonagem',verifyCharacterIdInParams(), updatedCharacter)

MarvelRouter.get('/characters/personagens', getCharacters)

MarvelRouter.get('/characters/:personagemId',verifyCharacterIdInParams(), getCharacterByUser)

module.exports = MarvelRouter;

