import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const data = {
  count: 1292,
  next: null,
  previous: null,
  results: [
    // ...
  ]
};

const getPokemon = async (RandomId:Number) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+RandomId);
    return response.data; // Retorna solo los datos de la respuesta en lugar de la respuesta completa
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error; // Re-lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
}

const getAllPokemon = async () => {
  const pokemon = 'blastoise';
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0.')
  const data = await response.json();
  let i = data.results.length
  
  console.log(data.results[8].name)
  for(let ii =1 ; ii<i; ii++){
    if(pokemon == data.results[ii].name){
      alert('HAY UN BLASTOISE')
      const d = 'blastoise'
      return d 
    }
  }
  
  return data;
};


const getSearchPokemon = async (searchValue:string) => {
  let id = searchValue;
  if(id==''){
    id= '1'
  }
  try{
    // with fetch
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error; // Re-lanza el error para que pueda ser manejado en un nivel superior si es necesario
  }
}


const getPokemonServices = {
  getPokemon,
  getAllPokemon,
  getSearchPokemon
};

export default getPokemonServices;
