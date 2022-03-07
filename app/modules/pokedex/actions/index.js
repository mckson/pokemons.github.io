import { createAction } from 'redux-actions';

export const getPokemonSpecies = createAction('GET_POKEMON_SPECIES_REQUEST');
export const getPokemonSpeciesSuccess = createAction('GET_POKEMON_SPECIES_SUCCESS');
export const getPokemonSpeciesFail = createAction('GET_POKEMON_SPECIES_FAIL');

export const getPokemonsSpecies = createAction('GET_POKEMONS_SPECIES_REQUEST');
export const getPokemonsSpeciesSuccess = createAction('GET_POKEMONS_SPECIES_SUCCESS');
export const getPokemonsSpeciesFail = createAction('GET_POKEMONS_SPECIES_FAIL');

export const getPokemonCardSpecies = createAction('GET_POKEMON_CARD_SPECIES_REQUEST');
export const getPokemonCardSpeciesSuccess = createAction('GET_POKEMON_CARD_SPECIES_SUCCESS');
export const getPokemonCardSpeciesFail = createAction('GET_POKEMON_CARD_SPECIES_FAIL');

export const getPokemonCard = createAction('GET_POKEMON_CARD_REQUEST');
export const getPokemonCardSuccess = createAction('GET_POKEMON_CARD_SUCCESS');
export const getPokemonCardFail = createAction('GET_POKEMON_CARD_FAIL');
