import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getPokemonSpecies } from '../../pokedex/actions';
import { selectedSpecies } from '../../pokedex/selectors';
import { selectedPokemon as selectedPokemonSelector } from '../selectors';
import { getPokemon } from '../actions';
import Pokemon from '../components/Pokemon';
import { Routes } from '../../../constants/routes';

const mapStat = (stat) => (stat ? stat.base_stat : null);
const mapVariety = (v, index) => ({
  name: v.pokemon.name,
  url: v.pokemon.url,
  isDefault: v.is_default,
  index,
});

const PokemonContainer = () => {
  const [selectedVariety, setSelectedVariety] = useState(null);
  const [varieties, setVarieties] = useState([]);

  const species = useSelector(selectedSpecies);
  const selectedPokemon = useSelector(selectedPokemonSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pokemon } = useParams();

  useEffect(() => {
    dispatch(getPokemonSpecies(pokemon));
  }, [dispatch, pokemon]);

  useEffect(() => {
    const speciesVarieties = species?.varieties.map(mapVariety);
    const defaultVariety = speciesVarieties?.find((v) => v.isDefault);

    if (defaultVariety && speciesVarieties) {
      setSelectedVariety(defaultVariety);
      setVarieties(speciesVarieties);
    }
  }, [dispatch, species?.varieties]);

  useEffect(() => {
    if (selectedVariety) {
      dispatch(getPokemon({ url: selectedVariety.url }));
    }
  }, [dispatch, selectedVariety]);

  const pokemonData =
    selectedPokemon && species
      ? {
          name: species.name,
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

  const handleVarietySelect = (varietyIndex) => {
    const selectedVariety = varieties.find((v) => v.index === varietyIndex);
    setSelectedVariety(selectedVariety);
  };

  const handleAbilityClick = (name) => {
    if (name) {
      navigate(`${Routes.ABILITIES.ROOT}/${name}`);
    } else {
      console.error('No name was specified for navigate');
    }
  };

  return (
    pokemonData && (
      <Pokemon
        pokemon={pokemonData}
        variety={selectedVariety}
        varieties={varieties}
        onVarietySelect={handleVarietySelect}
        onAbilityClick={handleAbilityClick}
      />
    )
  );
};

export default PokemonContainer;
