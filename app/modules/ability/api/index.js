import { api, getByUrl } from '../../../api';

export const getAbilities = (payload) => api.get(`ability`, { params: { ...payload } });
export const getAbility = (payload) =>
  payload.url ? getByUrl(payload.url) : api.get(`ability/${payload}`);
