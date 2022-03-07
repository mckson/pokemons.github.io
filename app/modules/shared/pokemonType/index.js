import React from 'react';

import { getPokemonTypeByTypeName, POKEMON_TYPE_COLOR } from '../../../constants';

import './styles.scss';

const PokemonType = ({ type }) => {
  const pokemonType = getPokemonTypeByTypeName(type);
  const color = POKEMON_TYPE_COLOR[pokemonType];

  return (
    <div style={{ backgroundColor: color }} className="type-container">
      {type}
    </div>
  );
};

export default PokemonType;
