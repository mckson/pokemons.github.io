import React from 'react';
import { Tab, Tabs } from '@mui/material';

import PokemonType from '../../shared/pokemonType';
import placeholder from '../../../../public/static/images/pokeball_placeholder.png';

import './styles.scss';

const PokemonInfo = ({ pokemon, variety, varieties, onVarietySelect, onAbilityClick }) => {
  const {
    image,
    name,
    nationalNumber,
    types,
    abilities,
    localNumber,
    catchRate,
    growthRate,
    eggGroups,
    gender,
    eggCycles,
  } = pokemon;

  return (
    <>
      <Tabs
        className="varieties-tabs"
        value={variety?.index}
        onChange={(_, v) => {
          onVarietySelect(v);
        }}
        variant="scrollable"
        scrollButtons="auto">
        {varieties.map((v, index) => (
          <Tab key={index} label={v.name} />
        ))}
      </Tabs>
      <div className="pokemon-info-container">
        <div className="image-container">
          <img width={`100%`} src={image ?? placeholder} />
        </div>
        <div>
          <div>
            <b>
              <h3>Pokedex data</h3>
            </b>
          </div>
          <div>{name}</div>
          <div>National number {nationalNumber}</div>
          <div>
            Type{' '}
            {types.map((t, index) => (
              <PokemonType key={index} type={t} />
            ))}
          </div>
          <div>Species {pokemon.species}</div>
          <div>Height {pokemon.height / 10} m</div>
          <div>Weight {parseFloat(pokemon.weight / 10).toFixed(1)} kg</div>
          <div>
            Abilities{' '}
            {abilities.map((a, index) => {
              if (a.is_hidden) {
                return (
                  <div onClick={() => onAbilityClick(a.ability.name)}>
                    {a.ability.name} {`(hidden ability)`}
                  </div>
                );
              } else {
                return (
                  <div onClick={() => onAbilityClick(a.ability.name)}>
                    <b>
                      {a.slot}. {a.ability.name}
                    </b>
                  </div>
                );
              }
            })}
          </div>
          <div>Local number {localNumber}</div>
        </div>
        <div>
          <div>
            <b>
              <h3>Training</h3>
            </b>
          </div>
          <div>Catch rate {catchRate}</div>
          <div>Growth rate {growthRate}</div>
          <div>
            <b>
              <h3>Breeding</h3>
            </b>
          </div>
          <div>Egg groups {eggGroups.map((e) => `${e}; `)}</div>
          <div>
            Gender{' '}
            {typeof gender === 'string' ? gender : `Male ${gender.male}% Female ${gender.female}%`}
          </div>
          <div>Egg cycles {eggCycles}</div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
