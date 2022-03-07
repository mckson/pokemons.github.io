import { createAction } from 'redux-actions';

export const getPokemons = createAction('GET_POKEMONS_REQUEST');
export const getPokemonsSuccess = createAction('GET_POKEMONS_SUCCESS');
export const getPokemonsFail = createAction('GET_POKEMONS_FAIL');

export const getPokemon = createAction('GET_POKEMON_REQUEST');
export const getPokemonSuccess = createAction('GET_POKEMON_SUCCESS');
export const getPokemonFail = createAction('GET_POKEMON_FAIL');
