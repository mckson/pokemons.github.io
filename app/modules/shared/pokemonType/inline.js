import { Typography } from '@mui/material';
import React from 'react';

import { getPokemonTypeByTypeName, POKEMON_TYPE_COLOR } from '../../../constants';

import './styles.scss';

const PokemonType = ({ type, styles }) => {
  const pokemonType = getPokemonTypeByTypeName(type);
  const color = POKEMON_TYPE_COLOR[pokemonType];

  return (
    <Typography style={{ ...styles, color: color }} className="type-inline-text">
      {type}
    </Typography>
  );
};

export default PokemonType;
