import { combineReducers } from 'redux';

import { species } from '../modules/pokedex/reducers';
import { pokemon } from '../modules/pokemon/reducers';
import { evolution } from '../modules/evolution/reducers';

const rootReducer = combineReducers({ species, pokemon, evolution });

export default rootReducer;
