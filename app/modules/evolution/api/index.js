import { api, getByUrl } from '../../../api';

export const getEvolutionChain = (payload) =>
  payload.url ? getByUrl(payload.url) : api.get(`evolution-chain/${payload}`);

export const getEvolutionTrigger = (payload) =>
  payload.url ? getByUrl(payload.url) : api.get(`evolution-trigger/${payload}`);
