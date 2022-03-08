import React from 'react';
import PokemonEvolutionContainer from '../../evolution/containers/PokemonEvolutionContainer';
import PokemonInfo from './PokemonInfo';

import PokemonStats from './PokemonStats';

const Pokemon = ({ pokemon, variety, varieties, onVarietySelect, onAbilityClick }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <PokemonInfo
        pokemon={pokemon}
        variety={variety}
        varieties={varieties}
        onVarietySelect={onVarietySelect}
        onAbilityClick={onAbilityClick}
      />
      <PokemonStats stats={pokemon.stats} />
      <div>
        <div>
          <h3>Evolution chart</h3>
        </div>
        <PokemonEvolutionContainer />
      </div>
    </div>
  );
};

export default Pokemon;
