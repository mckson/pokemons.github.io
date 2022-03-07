import axios from 'axios';

const configDefault = {
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 5000,
};

export const api = axios.create(configDefault);
export const getByUrl = (payload) => api.get(payload);
