import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { getSelectedAbility } from '../actions';

import Ability from '../components/Ability';

import { selectedAbility as selectedAbilitySelector } from '../selectors';

const mapAbility = (ability) => ({
  name: ability.name,
  effect: ability.effect_entries.find((entry) => entry.language.name === 'en')?.effect,
  changes: ability.effect_changes.map(
    (change) => change.effect_entries.find((entry) => entry.language.name === 'en')?.effect,
  ),
  descriptions:
    // groupByDescriptions(
    ability.flavor_text_entries
      .filter((entry) => entry.language.name === 'en')
      .map(
        (entry) => ({
          description: entry.flavor_text,
          group: entry.version_group.name,
        }),
        // ),
      ),
  pokemons: ability.pokemon
    .filter((pokemon) => !pokemon.is_hidden)
    .map((pokemon) => ({ name: pokemon.pokemon.name, url: pokemon.pokemon.url })),
  pokemonsWithHidden: ability.pokemon
    .filter((pokemon) => pokemon.is_hidden)
    .map((pokemon) => ({ name: pokemon.pokemon.name, url: pokemon.pokemon.url })),
});

const groupByDescriptions = (descriptions) =>
  descriptions.reduce((grouping, entry) => {
    const { description } = entry;
    grouping[description] = grouping[description] ?? [];
    grouping[description].push(entry);
    return grouping;
  });

const AbilityContainer = () => {
  const { ability } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedAbility = useSelector(selectedAbilitySelector);

  useEffect(() => {
    if (!selectedAbility) {
      dispatch(getSelectedAbility(ability));
    }
  }, [ability, dispatch, selectedAbility]);

  const currentAbility = selectedAbility ? mapAbility(selectedAbility) : null;

  const handlePokemonClick = (name) => {
    if (name) {
      navigate(`${Routes.POKEDEX.ROOT}/${name}`);
    } else {
      console.error('No name was specified for navigate');
    }
  };

  return currentAbility && <Ability ability={currentAbility} onPokemonClick={handlePokemonClick} />;
};

export default AbilityContainer;
