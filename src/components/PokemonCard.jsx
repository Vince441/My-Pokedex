import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <>
      <figure>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} />}
      </figure>

      <figcaption>{pokemon.name}</figcaption>
      <p>{pokemon.Presentation} <br /><br /> {pokemon.Type}</p>
    </>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.element,
  })
};

export default PokemonCard;
