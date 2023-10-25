
import Link from "next/link"
import { useState,useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import getPokemonServices from "@/services/pokeapi_services";

type Pokemon = {
    id: number
    name: string
    stargazers_count: number
    base_experience: number
  }

type searchValue ={
    name:{
        name: string
    }
}

export default function Navbar(){

    return (
      <nav className="flex justify-between content-center w-full h-16 text-white p-5 border-b border-violet-800 fixed z-0 bg-hinted-grey-3 bg-opacity-90">
        <ul>
          <li className="font-bold">NextJS</li>
        </ul>

        <ul className="flex justify-center">
            <li className="mr-5 font-bold">
                <Link href={"/"}>Inicio</Link>
            </li>
            <li className="mr-5 font-bold">
                <Link href={"/about"}>About</Link>
            </li>
        </ul>
      </nav>
    )
}