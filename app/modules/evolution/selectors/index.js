export const selectedEvolutionChain = (state) => state.evolution.chain;
export const evolutionSpeciesInfo = (name) => (state) =>
  state.evolution.species?.find((s) => s.name === name);
export const evolutionPokemonInfo = (name) => (state) =>
  state.evolution.pokemons?.find((p) => p.name === name);
export const trigger = (index) => (state) => state.evolution.triggers[index];
