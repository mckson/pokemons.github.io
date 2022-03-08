import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const AbilityRow = ({ abilityRowData, onSelect }) => {
  return (
    <TableRow onClick={() => onSelect(abilityRowData)}>
      <TableCell>{abilityRowData?.name}</TableCell>
      <TableCell>{abilityRowData?.pokemonCount}</TableCell>
      <TableCell>{abilityRowData?.description}</TableCell>
    </TableRow>
  );
};

export default AbilityRow;
