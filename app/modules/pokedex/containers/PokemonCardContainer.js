import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getPokemonCard, getPokemonCardSpecies } from '../actions';
import PokemonCard from '../components/PokemonCard';
import { pokemonListSpecies, pokemonListPokemon } from '../selectors';
import { Routes } from '../../../constants/routes';

const PokemonCardContainer = ({ url, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentSpecies = useSelector(pokemonListSpecies(name));
  const currentPokemon = useSelector(pokemonListPokemon(name));

  useEffect(() => {
    if (!currentSpecies) {
      dispatch(getPokemonCardSpecies({ url: url }));
    }
  }, [currentSpecies, dispatch, url]);

  useEffect(() => {
    if (!currentPokemon && currentSpecies) {
      const defaultVariety = currentSpecies?.varieties?.filter((v) => v.is_default)?.[0];

      defaultVariety && dispatch(getPokemonCard({ url: defaultVariety.pokemon.url }));
    }
  }, [currentPokemon, currentSpecies, dispatch]);

  const pokemon = currentPokemon && {
    id: currentPokemon.id,
    name: currentPokemon.name,
    image: currentPokemon.sprites.front_default,
    types: currentPokemon.types.map((t) => t.type.name),
  };

  const handleClick = (name) => {
    return navigate(`${Routes.POKEDEX.ROOT}/${name}`);
  };

  return <PokemonCard pokemon={pokemon} onClick={handleClick} />;
};

export default PokemonCardContainer;
