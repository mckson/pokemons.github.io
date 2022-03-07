import { handleActions } from 'redux-actions';
import {
  getEvolutionChainSuccess,
  getEvolutionPokemonSuccess,
  getEvolutionSpeciesSuccess,
  getEvolutionTriggerSuccess,
} from '../actions';

const defaultState = {
  chain: null,
  pokemons: [],
  species: [],
  triggers: {},
};

export const evolution = handleActions(
  {
    [getEvolutionChainSuccess]: (state, action) => ({
      ...state,
      pokemons: [],
      species: [],
      triggers: {},
      chain: action.payload,
    }),
    [getEvolutionPokemonSuccess]: (state, action) => {
      const pokemon = state.pokemons.find((p) => p.name === action.payload.name);

      if (!pokemon) {
        return { ...state, pokemons: [...state.pokemons, action.payload] };
      } else {
        console.log('Pokemon info already requested');
        return { ...state };
      }
    },
    [getEvolutionSpeciesSuccess]: (state, action) => {
      const species = state.species.find((s) => s.name === action.payload.name);

      if (!species) {
        return { ...state, species: [...state.species, action.payload] };
      } else {
        console.log('Species info already requested');
        return { ...state };
      }
    },
    [getEvolutionTriggerSuccess]: (state, action) => {
      const index = action.meta.index;
      const trigger = state.triggers[index];

      if (!trigger) {
        let newTriggers = { ...state.triggers };
        newTriggers[index] = action.payload;
        return { ...state, triggers: newTriggers };
      } else {
        console.log('Trigger info already requested');
        return { ...state };
      }
    },
  },
  defaultState,
);
