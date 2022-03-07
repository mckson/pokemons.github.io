import { api, getByUrl } from '../../../api';

export const getPokemons = (payload) => api.get('/pokemon', { params: payload });
export const getPokemon = (payload) =>
  payload.url ? getByUrl(payload.url) : api.get(`/pokemon/${payload}`);
