import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "Bulbizarre",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      Presentation : "Bulbizarre passe son temps à faire la sieste sous le soleil. Il y a une graine sur son dos. Il absorbe les rayons du soleil pour faire doucement pousser la graine.",
      Type : "Type : Plante"
    },
    {
      name: "Salameche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      Presentation : "La flamme qui brûle au bout de sa queue indique l'humeur de ce Pokémon. Elle vacille lorsque Salamèche est content. En revanche, lorsque qu'il s'énerve, la flamme prend de l'importance et brûle plus ardemment.",
      Type : "Type : Feu"
    },
    {
      name: "Carapuce",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        Presentation : "La carapace de Carapuce ne sert pas qu’à le protéger. La forme ronde de sa carapace et ses rainures lui permettent d’améliorer son hydrodynamisme. Ce Pokémon nage extrêmement vite.",
        Type : "Type : Eau"
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        Presentation : "Chaque fois que Pikachu découvre quelque chose de nouveau, il envoie un arc électrique. Lorsqu'on tombe sur une Baie carbonisée, ça signifie sans doute qu'un de ces Pokémon a envoyé une charge trop forte.",
        Type : "Type : Electrique"
    },
    {
name: "Mewtow",
imgSrc : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
Presentation : "Mewtwo est un Pokémon créé par manipulation génétique. Cependant, bien que les connaissances scientifiques des humains aient réussi à créer son corps, elles n'ont pas pu doter Mewtwo d'un cœur sensible.",
Type : "Type : Psy"

    },
    {
      name: "Mew",
      Presentation : "On dit que Mew possède le code génétique de tous les autres Pokémon. Il peut se rendre invisible à sa guise, ce qui lui permet de ne pas se faire remarquer quand il s'approche des gens.",
      Type : "Type : Psy"
    }
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
