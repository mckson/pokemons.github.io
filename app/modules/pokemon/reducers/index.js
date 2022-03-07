import { handleActions } from 'redux-actions';

import { getPokemonSuccess } from '../actions';

const defaultState = {
  selected: null,
};

export const pokemon = handleActions(
  {
    [getPokemonSuccess]: (state, action) => ({
      ...state,
      selected: action.payload,
    }),
  },
  defaultState,
);
