import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EVOLUTION_TRIGGERS } from '../../../constants';
import { getEvolutionTrigger } from '../../evolution/actions';
import { trigger } from '../../evolution/selectors';

import PokemonEvolutionDetails from '../components/PokemonEvolutionDetails';

const getEvolutionDetails = (evolutionDetails) => {
  let currentEvolutionDetails = evolutionDetails.find(
    (d) => d.trigger.name === EVOLUTION_TRIGGERS.USE_ITEM.name,
  );

  if (currentEvolutionDetails) {
    return { currentEvolutionDetails, type: EVOLUTION_TRIGGERS.USE_ITEM };
  }

  currentEvolutionDetails = evolutionDetails.find(
    (d) => d.trigger.name === EVOLUTION_TRIGGERS.LEVEL_UP.name && d.min_happiness,
  );

  if (currentEvolutionDetails) {
    return {
      currentEvolutionDetails,
      type: EVOLUTION_TRIGGERS.LEVEL_UP,
      happiness: !!currentEvolutionDetails.min_happiness,
      daytime: currentEvolutionDetails.time_of_day,
    };
  }

  currentEvolutionDetails = evolutionDetails.find(
    (d) => d.trigger.name === EVOLUTION_TRIGGERS.LEVEL_UP.name && d.min_level,
  );

  if (currentEvolutionDetails) {
    return {
      currentEvolutionDetails,
      type: EVOLUTION_TRIGGERS.LEVEL_UP,
      minLevel: currentEvolutionDetails.min_level,
      daytime: currentEvolutionDetails.time_of_day,
    };
  }

  currentEvolutionDetails = evolutionDetails.find(
    (d) => d.trigger.name === EVOLUTION_TRIGGERS.LEVEL_UP.name,
  );

  if (currentEvolutionDetails) {
    return {
      currentEvolutionDetails,
      type: EVOLUTION_TRIGGERS.LEVEL_UP,
      happiness: !!currentEvolutionDetails.min_happiness,
      daytime: currentEvolutionDetails.time_of_day,
    };
  }

  return currentEvolutionDetails[0];
};

const PokemonEvolutionDetailsContainer = ({ nodeIndex, evolutionDetails }) => {
  const dispatch = useDispatch();

  console.log(evolutionDetails);

  const currentTrigger = useSelector(trigger(nodeIndex));

  const { currentEvolutionDetails, type, happiness, daytime, minLevel } =
    getEvolutionDetails(evolutionDetails);

  useEffect(() => {
    if (!currentTrigger && currentEvolutionDetails) {
      dispatch(
        getEvolutionTrigger({
          payload: { url: currentEvolutionDetails.trigger.url },
          meta: { index: nodeIndex },
        }),
      );
    }
  }, [currentEvolutionDetails, currentTrigger, dispatch, evolutionDetails, nodeIndex]);

  return (
    <PokemonEvolutionDetails
      trigger={currentTrigger?.names.find((n) => n.language.name === 'en').name}
      type={type}
      minLevel={minLevel}
      happiness={happiness}
      daytime={daytime}
      item={currentEvolutionDetails?.item?.name}
    />
  );
};

export default PokemonEvolutionDetailsContainer;
