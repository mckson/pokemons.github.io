import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAbility, setSelectedAbility } from '../actions';
import { abilityByName } from '../selectors';
import AbilityRow from '../components/AbilityRow';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../constants/routes';

const mapAbility = (ability) => ({
  description: ability.flavor_text_entries.find((d) => d.language.name === 'en')?.flavor_text,
  name: ability.name,
  pokemonCount: ability.pokemon.length,
});

const AbilityRowContainer = ({ url, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentAbility = useSelector(abilityByName(name));

  useEffect(() => {
    if (!currentAbility) {
      dispatch(getAbility({ url: url }));
    }
  }, [currentAbility, dispatch, url]);

  const handleSelect = (data) => {
    if (data) {
      dispatch(setSelectedAbility(currentAbility));
      navigate(`${Routes.ABILITIES.ROOT}/${data.name}`);
    }
  };

  const abilityData = currentAbility ? mapAbility(currentAbility) : null;

  return <AbilityRow abilityRowData={abilityData} onSelect={handleSelect} />;
};

export default AbilityRowContainer;
