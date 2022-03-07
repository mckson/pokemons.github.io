import { Link, Typography } from '@mui/material';
import React from 'react';
import PokemonType from '../../shared/pokemonType/inline';

import './styles.scss';

const PokemonEvolutionCard = ({ pokemon, onClick }) => {
  return (
    <div className="evolution-card">
      {pokemon ? (
        <>
          <div className="image-container">
            <img src={pokemon.image} onClick={() => onClick(pokemon.name)} className="image" />
          </div>
          <div className="text-container">
            <Typography className="id-label">#{pokemon.id}</Typography>
          </div>
          <div className="text-container">
            <Link className="name-label" onClick={() => onClick(pokemon.name)}>
              {pokemon.name}
            </Link>
          </div>
          <div className="text-container">
            {pokemon.types.map((type, index) => (
              <PokemonType
                type={type}
                key={index}
                styles={{ fontSize: '0.875rem', lineHeight: '1rem' }}
              />
            ))}
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default PokemonEvolutionCard;
