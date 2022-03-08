import React from 'react';

const Ability = ({ ability, onPokemonClick }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: ' center' }}>
        <h3 style={{ textTransform: 'capitalize' }}>{ability.name} (Ability)</h3>
      </div>
      <div>
        <div>
          <h3>Effect</h3>
        </div>
        <div>{ability.effect}</div>
        <div>
          <h3>Changes</h3>
        </div>
        {ability.changes.map((change, index) => (
          <div key={`change-${index}`}>{change}</div>
        ))}
        <div>
          <h3>Game descriptions</h3>
        </div>
        {ability.descriptions.map((entry, index) => (
          <div
            key={`description-${index}`}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>{entry.group}</div>
            <div>{entry.description}</div>
          </div>
        ))}
        <div>
          <h3>Pokemon with {ability.name}</h3>
        </div>
        {ability.pokemons.map((pokemon, index) => (
          <div onClick={() => onPokemonClick(pokemon.name)} key={`pokemon-${index}`}>
            {pokemon.name}
          </div>
        ))}
        <div>
          <h3>{ability.name} as hidden ability</h3>
        </div>
        {ability.pokemonsWithHidden.map((pokemon, index) => (
          <div onClick={() => onPokemonClick(pokemon.name)} key={`pokemon-hidden-${index}`}>
            {pokemon.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ability;
