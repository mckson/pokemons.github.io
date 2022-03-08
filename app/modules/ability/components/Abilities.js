import { Button, Table, TableBody, TableCell, TableHead, TextField } from '@mui/material';
import React from 'react';
import AbilityRowContainer from '../containers/AbilityRowContainer';

const Abilities = ({
  abilities,
  searchName,
  onNextClick,
  onPreviousClick,
  onSearchNameChange,
  isNextDisabled,
  isPreviousDisabled,
}) => {
  return (
    <>
      <TextField
        size="small"
        onChange={(e) => onSearchNameChange(e.target.value)}
        value={searchName}></TextField>
      <Table size="small">
        <TableHead>
          <TableCell width="20%">Name</TableCell>
          <TableCell width="10%">Pokemon</TableCell>
          <TableCell width="70%">Description</TableCell>
        </TableHead>
        <TableBody>
          {abilities.map((ability, index) => (
            <AbilityRowContainer
              key={`ability-table-row=${index}`}
              url={ability.url}
              name={ability.name}
            />
          ))}
        </TableBody>
      </Table>
      <Button disabled={isPreviousDisabled} onClick={onPreviousClick}>
        Prev
      </Button>
      <Button disabled={isNextDisabled} onClick={onNextClick}>
        Next
      </Button>
    </>
  );
};

export default Abilities;
