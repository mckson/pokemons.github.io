import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonsSpecies } from '../actions';
import { speciesList } from '../selectors';
import Pokemons from '../components/Pokemons';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants/routes';

const PokemonsContainer = () => {
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);

  const species = useSelector(speciesList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPokemonsSpecies({ limit, offset }));
  }, [dispatch, limit, offset]);

  const handleNextClick = () => {
    setOffset(offset + limit);
  };

  const handlePreviosClick = () => {
    setOffset(offset - limit);
  };

  const handleSelect = (name) => {
    navigate(`${Routes.POKEDEX.ROOT}/${name}`);
  };

  return (
    species?.length > 0 && (
      <Pokemons
        species={species}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviosClick}
        onSelect={handleSelect}
      />
    )
  );
};

export default PokemonsContainer;
