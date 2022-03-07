import { Button } from '@mui/material';
import React from 'react';

import PokemonCardContainer from '../containers/PokemonCardContainer';

const Pokemons = ({ species, onNextClick, onPreviousClick, onSelect }) => {
  return (
    <React.Fragment>
      {/* {species.map((pokemonSpecies, index) => {
        const pokemonVarieties = pokemonSpecies.varieties;

        return pokemonVarieties && <PokemonContainer key={index} varieties={pokemonVarieties} />;
      })} */}
      {species.map((pokemonSpecies, index) => (
        // <div key={index} onClick={() => onSelect(pokemonSpecies.name)}>
        //   {pokemonSpecies.name}
        // </div>
        <PokemonCardContainer
          key={`pokemon-card-${index}`}
          url={pokemonSpecies.url}
          name={pokemonSpecies.name}
        />
      ))}
      <div>
        <Button onClick={onPreviousClick}>{`<-`}</Button>
        <Button onClick={onNextClick}>{`->`}</Button>
      </div>
    </React.Fragment>
  );
};

export default Pokemons;
