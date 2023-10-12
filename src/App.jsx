import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import NavBar from "./components/NavBar"

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {
  
const [pokemonIndex, setpokemonIndex] = useState(0);
console.log(pokemonIndex)




  
  return (
 

<div>


<NavBar pokemonIndex= {pokemonIndex} setpokemonIndex={setpokemonIndex} pokemonListLength={pokemonList.length}/>
<PokemonCard pokemon = {pokemonList[pokemonIndex]} />
</div>
  );
}


export default App
