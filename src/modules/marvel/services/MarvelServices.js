
const axios = require('axios');
const crypto = require('crypto');

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = 


module.exports = {
  getAllCharacters: async (nameStartsWith) => {
    try {
      const timestamp = new Date().getTime();
      const hash = crypto.createHash('md5').update(timestamp + PRIVATE_KEY + PUBLIC_KEY).digest('hex');

      const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
      const params = {
        apikey: PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
        nameStartsWith: nameStartsWith, 
      };

      const response = await axios.get(baseUrl, { params });

      return response.data;
    } catch (error) {
      throw new Error('Error fetching characters from Marvel API');
    }
  },

  getCharactersBasicInfo: async (nameStartsWith) => {
    try {
      const timestamp = new Date().getTime();
      const hash = crypto.createHash('md5').update(timestamp + PRIVATE_KEY + PUBLIC_KEY).digest('hex');

      const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
      const params = {
        apikey: PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
        nameStartsWith: nameStartsWith,
      };

      const response = await axios.get(baseUrl, { params });

      const characters = response.data.data.results.map(character => ({
        id: character.id,
        name: character.name,
        description: character.description,
      }));

      return characters;
    } catch (error) {
      throw new Error('Error fetching characters from Marvel API');
    }
  },
};

