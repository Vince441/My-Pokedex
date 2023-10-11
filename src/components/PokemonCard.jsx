import PropTypes from "prop-types";






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

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSRC: PropTypes.element,
    })
  }



export default PokemonCard

