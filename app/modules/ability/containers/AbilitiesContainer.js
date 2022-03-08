import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAbilities } from '../actions';
import Abilities from '../components/Abilities';
import { abilitiesPreview as abilitiesPreviewSelector } from '../selectors';

const ALL_ABILITIES_COUNT = 100000;

const AbilitiesContainer = () => {
  const [limit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [searchInputName, setSearchInputName] = useState('');
  const [timerId, setTimerId] = useState(null);

  const dispatch = useDispatch();

  const abilitiesPreview = useSelector(abilitiesPreviewSelector);

  useEffect(() => {
    {
      if (!abilitiesPreview.length) {
        dispatch(getAbilities({ limit: ALL_ABILITIES_COUNT }));
      }
    }
  }, [abilitiesPreview.length, dispatch, limit, offset]);

  let abilities = abilitiesPreview
    .filter((a) => (searchName ? a.name.startsWith(searchName.toLowerCase()) : true))
    .sort((a, b) => (a.name >= b.name ? 1 : -1));

  const count = abilities.length;
  abilities = abilities.slice(offset, limit + offset);

  const handleNextClick = () => {
    setOffset(offset + limit);
  };

  const handlePreviosClick = () => {
    setOffset(offset - limit);
  };

  const handleSearchNameChange = (name) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      setSearchName(name);
      setOffset(0);
    }, 500);
    setTimerId(newTimerId);
    setSearchInputName(name);
  };

  return (
    abilities && (
      <Abilities
        isNextDisabled={offset + limit >= count}
        isPreviousDisabled={offset - limit < 0}
        abilities={abilities}
        searchName={searchInputName}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviosClick}
        onSearchNameChange={handleSearchNameChange}
      />
    )
  );
};

export default AbilitiesContainer;
