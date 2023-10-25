import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { PropsWithChildren, useState } from "react";

// Define el tipo de la estructura de un Pokémon
type Pokemon = {
  name: string;
  // Otras propiedades del Pokémon
};

export default function Layout({ children }: PropsWithChildren) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const handlePokemonSelected = (pokemon: Pokemon) => {
    // Lógica para manejar el Pokémon seleccionado en Layout
    setSelectedPokemon(pokemon);
  };
  console.log(selectedPokemon)

  return (
    <>
      <Head>
        <title>NextPractice</title>
        <meta name="description" content="Practicando Nextjs" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
