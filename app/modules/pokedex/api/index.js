import { api, getByUrl } from '../../../api';

export const getPokemonsSpecies = (payload) => api.get('pokemon-species', { params: payload });
export const getPokemonSpecies = (payload) =>
  payload.url ? getByUrl(payload.url) : api.get(`pokemon-species/${payload}`);
