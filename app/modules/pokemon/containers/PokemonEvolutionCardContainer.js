import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../../../constants/routes';

import { getEvolutionPokemon, getEvolutionSpecies } from '../../evolution/actions';
import { evolutionPokemonInfo, evolutionSpeciesInfo } from '../../evolution/selectors';
import PokemonEvolutionCard from '../components/PokemonEvolutionCard';

const PokemonEvolutionCardContainer = ({ url, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const speciesInfo = useSelector(evolutionSpeciesInfo(name));
  const pokemonInfo = useSelector(evolutionPokemonInfo(name));

  useEffect(() => {
    if (!speciesInfo) {
      dispatch(getEvolutionSpecies({ url: url }));
    }
  }, [url, dispatch, speciesInfo]);

  useEffect(() => {
    if (!pokemonInfo && speciesInfo) {
      const defaultVariety = speciesInfo?.varieties?.filter((v) => v.is_default)?.[0];

      defaultVariety && dispatch(getEvolutionPokemon({ url: defaultVariety.pokemon.url }));
    }
  }, [dispatch, pokemonInfo, speciesInfo]);

  const pokemon = pokemonInfo && {
    id: pokemonInfo.id,
    name: pokemonInfo.name,
    image: pokemonInfo.sprites.other.home.front_default,
    types: pokemonInfo.types.map((t) => t.type.name),
  };

  const handleClick = (name) => {
    return navigate(`${Routes.POKEDEX.ROOT}/${name}`);
  };

  return <PokemonEvolutionCard pokemon={pokemon} onClick={handleClick} />;
};

export default PokemonEvolutionCardContainer;
