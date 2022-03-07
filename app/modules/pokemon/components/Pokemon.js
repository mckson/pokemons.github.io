import React from 'react';
import PokemonEvolutionContainer from '../../evolution/containers/PokemonEvolutionContainer';
import PokemonType from '../../shared/pokemonType';

import PokemonStats from './PokemonStats';

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <img loading="lazy" src={pokemon.image} />
      <div>
        <b>
          <h3>Pokedex data</h3>
        </b>
      </div>
      <div>{pokemon.name}</div>
      <div>National number {pokemon.nationalNumber}</div>
      <div>
        Type{' '}
        {pokemon.types.map((t, index) => (
          <PokemonType key={index} type={t} />
        ))}
      </div>
      <div>Species {pokemon.species}</div>
      <div>Height {pokemon.height / 10} m</div>
      <div>Weight {parseFloat(pokemon.weight / 10).toFixed(1)} kg</div>
      <div>
        Abilities{' '}
        {pokemon.abilities.map((a, index) => {
          if (a.is_hidden) {
            return (
              <div>
                {a.ability.name} {`(hidden ability)`}
              </div>
            );
          } else {
            return (
              <div>
                <b>
                  {a.slot}. {a.ability.name}
                </b>
              </div>
            );
          }
        })}
      </div>
      <div>Local number {pokemon.localNumber}</div>
      <div>
        <b>
          <h3>Training</h3>
        </b>
      </div>
      <div>Catch rate {pokemon.catchRate}</div>
      <div>Growth rate {pokemon.growthRate}</div>
      <div>
        <b>
          <h3>Breeding</h3>
        </b>
      </div>
      <div>Egg groups {pokemon.eggGroups.map((e) => `${e}; `)}</div>
      <div>
        Gender{' '}
        {typeof pokemon.gender === 'string'
          ? pokemon.gender
          : `Male ${pokemon.gender.male}% Female ${pokemon.gender.female}%`}
      </div>
      <div>Egg cycles {pokemon.eggCycles}</div>
      <div>
        <b>
          <h3>Base stats</h3>
        </b>
      </div>
      <PokemonStats stats={pokemon.stats} />
      <PokemonEvolutionContainer />
    </div>
  );
};

export default Pokemon;
