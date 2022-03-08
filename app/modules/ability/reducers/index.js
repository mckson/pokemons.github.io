import { combineActions } from 'redux-actions';
import { handleActions } from 'redux-actions';
import {
  getAbilitiesSuccess,
  getAbilitySuccess,
  getSelectedAbilitySuccess,
  setSelectedAbility,
} from '../actions';

const defaultState = {
  abilitiesPreview: [],
  abilities: [],
  selectedAbility: null,
};

export const abilities = handleActions(
  {
    [getAbilitiesSuccess]: (state, action) => ({
      ...state,
      abilitiesPreview: action.payload.results,
      abilities: [],
      selectedAbility: null,
    }),
    [getAbilitySuccess]: (state, action) => {
      const ability = state.abilities.find((a) => a.name === action.payload.name);

      if (!ability) {
        return { ...state, abilities: [...state.abilities, action.payload] };
      } else {
        console.log('Ability already requested.');
        return state;
      }
    },
    [combineActions(setSelectedAbility, getSelectedAbilitySuccess)]: (state, action) => ({
      ...state,
      selectedAbility: action.payload,
    }),
  },
  defaultState,
);
