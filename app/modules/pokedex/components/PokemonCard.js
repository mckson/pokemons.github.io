import { Link, Typography } from '@mui/material';
import React from 'react';
import PokemonType from '../../shared/pokemonType';

import './styles.scss';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="pokemon-card-container">
      <div>
        {pokemon ? (
          <>
            <div>
              <img src={pokemon.image} onClick={() => onClick(pokemon.name)} className="image" />
            </div>
            <div>
              <Typography className="id-label">#{pokemon.id}</Typography>
            </div>
            <div>
              <Link className="name-label" onClick={() => onClick(pokemon.name)}>
                {pokemon.name}
              </Link>
            </div>
            <div>
              {pokemon.types.map((type, index) => (
                <PokemonType type={type} key={index} />
              ))}
            </div>
          </>
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
