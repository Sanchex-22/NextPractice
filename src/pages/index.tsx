import Layout from "@/components/layout"
import { useState } from "react"
import getPokemonServices from "@/services/pokeapi_services"
import type { InferGetServerSidePropsType, GetServerSideProps } from "next"
import TicketCard from "@/components/ticket_card"
import Image from "next/image"
import Head from "next/head"

type Sprite = {
  front_shiny: string
  back_shiny: string
}

type Move = {
  move: {
    name: string
  }
}

type Type = {
  type: {
    name: string
  }
}

type Pokemon = {
  id: number
  name: string
  stargazers_count: number
  sprites: Sprite
  moves: Move[]
  types: Type[]
  base_experience: number
}

export async function getServerSideProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
  const pokemon: Pokemon = await response.json()
  console.log(pokemon)

  return { props: { pokemon } }
}

const HomePage = ({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [RandomId, setRandom] = useState(1)
  const [pokemon1, setPokemon] = useState(pokemon)
  console.log({ pokemon1 })

  function btnAleatorio() {
    const id = Math.floor(Math.random() * 806 + 1)
    setRandom(id)
    if (id > 0) {
      getPokemonServices
        .getPokemon(id)
        .then((response) => response)
        .then((data) => {
          setPokemon(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching Pokémon data:", error)
        })
    } else {
      console.log("no hay indice 0")
      setRandom(1)
    }
  }

  function btnAnterior() {
    let id = RandomId - 1
    if (id > 0) {
      setRandom(id)
      getPokemonServices
        .getPokemon(id)
        .then((response) => response)
        .then((data) => {
          setPokemon(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching Pokémon data:", error)
        })
    } else {
      console.log("no hay indice 0")
      setRandom(1)
    }
  }

  function btnSiguiente() {
    let id = RandomId + 1
    if (RandomId > 0) {
      setRandom(id)
      getPokemonServices
        .getPokemon(id)
        .then((response) => response)
        .then((data) => {
          setPokemon(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching Pokémon data:", error)
        })
    } else {
      console.log("no hay indice 0")
      setRandom(1)
    }
  }
  return (
    <Layout>
      <div className="flex bg-hinted-grey-1 h-screen text-white pt-16 justify-center items-center w-full">
        <Head>
          <title>La página de Inicio</title>
          <meta name="description" content="Practicando Nextjs" />
        </Head>
        {pokemon ? (
          <div className="flex-col bg-hinted-grey-6 w-[250px] h-[300px] m-5 border border-white_violet_5 rounded">
            <div className="flex h-1/2 w-full justify-center items-center bg-black_violet_1">
              <Image
                src={pokemon1.sprites.front_shiny}
                alt={pokemon1.name}
                width={200}
                height={200}
                className="h-[200px] cover"
              />
            </div>
            <div className="text-center bg-white_violet_5 h-1/2">
              <p className="font-extrabold text-[20px]">
                Name: {pokemon1.name}
              </p>
              <p className="text-[20px]">id: {pokemon1.id}</p>
              <p>Base Exp:{pokemon1.base_experience}</p>
              <p>Moves: {pokemon1.moves[0].move.name}</p>
              <div className="pt-2 pb-2">
                {pokemon1.types.length > 0 &&
                  pokemon1.types.map((pokemonType) => (
                    <TicketCard
                      key={pokemonType.type.name}
                      prop={pokemonType.type.name}
                    />
                  ))}
              </div>
            </div>
            {/* You can access other properties of the Pokemon here */}
            <div className="flex justify-between">
              <button
                className="w-1/2 bg-violet-700 rounded-md p-2 border mt-2"
                onClick={btnAnterior}
              >
                Anterior
              </button>
              <button
                className="w-1/2 bg-violet-700 rounded-md p-2 border mt-2"
                onClick={btnSiguiente}
              >
                Siguiente
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="w-full bg-violet-700 rounded-md p-2 border mt-2 "
                onClick={btnAleatorio}
              >
                Aleatorio
              </button>
            </div>
          </div>
        ) : (
          <p>No tenemos pokemones</p>
        )}
      </div>
    </Layout>
  )
}

export default HomePage
