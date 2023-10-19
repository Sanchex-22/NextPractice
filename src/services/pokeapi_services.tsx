import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (RandomId) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+RandomId);
    return response.data; // Retorna solo los datos de la respuesta en lugar de la respuesta completa
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error; // Re-lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
}

const getPokemonServices = {
  getPokemon
};

export default getPokemonServices;
