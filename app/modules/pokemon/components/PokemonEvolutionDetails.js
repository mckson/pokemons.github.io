import React from 'react';
import { Link, Typography } from '@mui/material';

import { EVOLUTION_TRIGGERS } from '../../../constants';
import ArrowRight from '../../../constants/icons/arrowRight';

const getText = ({ trigger, type, happiness, minLevel }) => {
  if (type.id === EVOLUTION_TRIGGERS.USE_ITEM.id)
    return { text: `${trigger?.toLowerCase()}`, needItem: true };
  if (type.id === EVOLUTION_TRIGGERS.LEVEL_UP.id) {
    if (happiness) {
      return { text: `${trigger?.toLowerCase()}, high happiness` };
    }
    if (minLevel) {
      return { text: `level ${minLevel}` };
    }
  }
  return { text: trigger?.toLowerCase() };
};

const PokemonEvolutionDetails = ({ trigger, item, type, happiness, daytime, minLevel }) => {
  const { text, needItem } = getText({ trigger, type, happiness, minLevel });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 100, alignItems: 'center' }}>
      {trigger && (
        <>
          <Typography>{text}</Typography>
          {needItem && <Link>{item}</Link>}
          {daytime && <Typography>,{daytime}</Typography>}
        </>
      )}
      <ArrowRight />
    </div>
  );
};

export default PokemonEvolutionDetails;
