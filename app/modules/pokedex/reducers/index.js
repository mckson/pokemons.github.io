import { handleActions } from 'redux-actions';
import {
  getPokemonCardSpeciesSuccess,
  getPokemonCardSuccess,
  getPokemonSpeciesSuccess,
  getPokemonsSpeciesSuccess,
} from '../actions';

const defaultState = {
  species: [],
  listSpecies: [],
  listPokemons: [],
  selected: null,
  count: 0,
};

export const species = handleActions(
  {
    [getPokemonsSpeciesSuccess]: (state, action) => ({
      ...state,
      count: action.payload.count,
      species: action.payload.results,
    }),
    [getPokemonSpeciesSuccess]: (state, action) => ({
      ...state,
      selected: action.payload,
    }),
    [getPokemonCardSpeciesSuccess]: (state, action) => {
      const species = state.listSpecies.find((s) => s.name === action.payload.name);
      if (!species) {
        return {
          ...state,
          listSpecies: [...state.listSpecies, action.payload],
        };
      } else {
        console.log('Species already requested.');
        return { ...state };
      }
    },
    [getPokemonCardSuccess]: (state, action) => {
      const pokemon = state.listPokemons.find((p) => p.name === action.payload.name);
      if (!pokemon) {
        return {
          ...state,
          listPokemons: [...state.listPokemons, action.payload],
        };
      } else {
        console.log('Pokemon already requested.');
        return { ...state };
      }
    },
  },
  defaultState,
);
