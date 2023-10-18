import Layout from "./levelpages/layout";
import { useEffect, useState } from 'react';

export default function Homepage() {
    const [pokemon, setPokemon] = useState(null);
    const [RandomId,setRandom]= useState(1)
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/'+RandomId)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
    }, []);

    function btnSiguiente (){
        if(RandomId>0){
            let i=RandomId+1
            setRandom(i)
            fetch('https://pokeapi.co/api/v2/pokemon/'+RandomId)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
        }
        else{
            console.log("no hay indice 0")
        }
    }
    function btnAleatorio (){
        if(RandomId>0){
            const i=Math.floor(Math.random() * 806 + 1)
            setRandom(i)
            fetch('https://pokeapi.co/api/v2/pokemon/'+RandomId)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
        }
        else{
            console.log("no hay indice 0")
        }
    }
    function btnAnterior (){
        if(RandomId>0){
            let i=RandomId-1
            setRandom(i)
            fetch('https://pokeapi.co/api/v2/pokemon/'+RandomId)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching Pokémon data:', error);
            });
        }
        else{
            console.log("no hay indice 0")
        }
    }

    return (
        <div className='flex bg-hinted-grey-1 h-screen text-white pt-16 justify-center items-center w-full'>
            {/* para mapear a 1 */}
            {pokemon && (
                <div className="flex-col bg-hinted-grey-6 w-[250px] h-[300px] m-5 border border-white_violet_5 rounded">
                    <div className="flex h-1/2 w-full justify-center items-center bg-black_violet_1">
                        <img src={pokemon.sprites.front_shiny} alt="" className="h-[200px] cover"/>
                    </div>
                    <div className="text-center bg-white_violet_5 h-1/2">
                        <p className="font-extrabold text-[20px]">Name: {pokemon.name}</p>
                        <p className="text-[20px]">id: {pokemon.id}</p>
                        <p>Base Exp:{pokemon.base_experience}</p>
                        <p>Moves: {pokemon.moves[0].move.name}</p>
                    </div>
                    
                    {/* You can access other properties of the Pokemon here */}
                    <div className="flex justify-between">
                        <button className="w-1/2 bg-violet-700 rounded-md p-2 border mt-2" onClick={btnAnterior}>Anterior</button>
                        <button className="w-1/2 bg-violet-700 rounded-md p-2 border mt-2" onClick={btnSiguiente}>Siguiente</button>
                    </div>

                    <div className="flex justify-center">
                        <button className="w-full bg-violet-700 rounded-md p-2 border mt-2 " onClick={btnAleatorio}>Aleatorio</button>
                    </div>
                </div>
            )}

        </div>
    );
}
