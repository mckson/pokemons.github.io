import { combineReducers } from 'redux';

import { species } from '../modules/pokedex/reducers';
import { pokemon } from '../modules/pokemon/reducers';
import { evolution } from '../modules/evolution/reducers';
import { abilities } from '../modules/ability/reducers';

const rootReducer = combineReducers({ species, pokemon, evolution, abilities });

export default rootReducer;
