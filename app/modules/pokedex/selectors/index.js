export const speciesList = (state) => state.species.species;
export const selectedSpecies = (state) => state.species.selected;
export const pokemonListSpecies = (name) => (state) =>
  state.species.listSpecies.find((s) => s.name === name);
export const pokemonListPokemon = (name) => (state) =>
  state.species.listPokemons.find((p) => p.name === name);
