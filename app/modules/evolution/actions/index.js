import { createAction } from 'redux-actions';

export const getEvolutionChain = createAction('GET_EVOLUTION_CHAIN_REQUEST');
export const getEvolutionChainSuccess = createAction('GET_EVOLUTION_CHAIN_SUCCESS');
export const getEvolutionChainFail = createAction('GET_EVOLUTION_CHAIN_FAIL');

export const getEvolutionSpecies = createAction('GET_EVOLUTION_SPECIES_REQUEST');
export const getEvolutionSpeciesSuccess = createAction('GET_EVOLUTION_SPECIES_SUCCESS');
export const getEvolutionSpeciesFail = createAction('GET_EVOLUTION_SPECIES_FAIL');

export const getEvolutionPokemon = createAction('GET_EVOLUTION_POKEMON_REQUEST');
export const getEvolutionPokemonSuccess = createAction('GET_EVOLUTION_POKEMON_SUCCESS');
export const getEvolutionPokemonFail = createAction('GET_EVOLUTION_POKEMON_FAIL');

export const getEvolutionTrigger = createAction(
  'GET_EVOLUTION_TRIGGER_REQUEST',
  ({ payload }) => payload,
  ({ meta }) => meta,
);
export const getEvolutionTriggerSuccess = createAction(
  'GET_EVOLUTION_TRIGGER_SUCCESS',
  ({ payload }) => payload,
  ({ meta }) => meta,
);
export const getEvolutionTriggerFail = createAction(
  'GET_EVOLUTION_TRIGGER_FAIL',
  ({ payload }) => payload,
  ({ meta }) => meta,
);
