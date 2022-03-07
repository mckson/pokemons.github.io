import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPokemonSpecies } from '../../pokedex/actions';
import { selectedSpecies } from '../../pokedex/selectors';
import { selectedPokemon as selectedPokemonSelector } from '../selectors';
import { getPokemon } from '../actions';
import Pokemon from '../components/Pokemon';

const mapStat = (stat) => (stat ? stat.base_stat : null);

const PokemonContainer = () => {
  const species = useSelector(selectedSpecies);
  const selectedPokemon = useSelector(selectedPokemonSelector);

  const dispatch = useDispatch();
  const { pokemon } = useParams();

  useEffect(() => {
    dispatch(getPokemonSpecies(pokemon));
  }, [dispatch, pokemon]);

  useEffect(() => {
    const defaultVariety = species?.varieties?.filter((v) => v.is_default)?.[0];

    defaultVariety && dispatch(getPokemon({ url: defaultVariety.pokemon.url }));
  }, [dispatch, species?.varieties]);

  const pokemonData =
    selectedPokemon && species
      ? {
          image: selectedPokemon.sprites.other['official-artwork'].front_default,
          nationalNumber: species.id,
          types: selectedPokemon.types.map((t) => t.type.name),
          species: '???',
          stats: {
            hp: mapStat(selectedPokemon.stats.find((stat) => stat.stat.name === 'hp')),
            attack: mapStat(selectedPokemon.stats.find((stat) => stat.stat.name === 'attack')),
            defense: mapStat(selectedPokemon.stats.find((stat) => stat.stat.name === 'defense')),
            specialAttack: mapStat(
              selectedPokemon.stats.find((stat) => stat.stat.name === 'special-attack'),
            ),
            specialDefense: mapStat(
              selectedPokemon.stats.find((stat) => stat.stat.name === 'special-defense'),
            ),
            speed: mapStat(selectedPokemon.stats.find((stat) => stat.stat.name === 'speed')),
          },
          height: selectedPokemon.height,
          weight: selectedPokemon.weight,
          abilities: selectedPokemon.abilities,
          localNumber: '???',
          catchRate: species.capture_rate,
          baseFriendship: species.base_happiness,
          growthRate: species.growth_rate.name,
          eggGroups: species.egg_groups.map((e) => e.name),
          gender:
            species.gender_rate > -1
              ? {
                  female: parseFloat((species.gender_rate * 100) / 8).toFixed(1),
                  male: parseFloat(((8 - species.gender_rate) * 100) / 8).toFixed(1),
                }
              : 'Genderless',
          eggCycles: species.hatch_counter,
        }
      : null;

  return pokemonData && <Pokemon pokemon={pokemonData} />;
};

export default PokemonContainer;
