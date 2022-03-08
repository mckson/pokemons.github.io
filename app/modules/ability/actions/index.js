import { createAction } from 'redux-actions';

export const getAbilities = createAction('GET_ABILITIES_REQUEST');
export const getAbilitiesSuccess = createAction('GET_ABILITIES_SUCCESS');
export const getAbilitiesFail = createAction('GET_ABILITIES_FAIL');

export const getAbility = createAction('GET_ABILITY_REQUEST');
export const getAbilitySuccess = createAction('GET_ABILITY_SUCCESS');
export const getAbilityFail = createAction('GET_ABILITY_FAIL');

export const setSelectedAbility = createAction('SET_SELECTED_ABILITY');

export const getSelectedAbility = createAction('GET_SELECTED_ABILITY_REQUEST');
export const getSelectedAbilitySuccess = createAction('GET_SELECTED_ABILITY_SUCCESS');
export const getSelectedAbilityFail = createAction('GET_SELECTED_ABILITY_FAIL');
