
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


function PokemonCard(props) {
console.log(props)
    const pokemon = props.pokemon;

    return (
    <>
    <figure>
        
        {pokemon.imgSrc === undefined ? <p>???</p>:
<img src={pokemon.imgSrc} />}

</figure>

<figcaption>{pokemon.name}</figcaption>

</>
    );
}



export default PokemonCard

