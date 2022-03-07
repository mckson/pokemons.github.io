import * as pokedexActions from '../modules/pokedex/actions';
import * as pokedexApi from '../modules/pokedex/api';
import * as pokemonActions from '../modules/pokemon/actions';
import * as pokemonApi from '../modules/pokemon/api';
import * as evolutionActions from '../modules/evolution/actions';
import * as evolutionApi from '../modules/evolution/api';

const apiCallsMapping = (action) => {
  switch (action.type) {
    case pokedexActions.getPokemonsSpecies().type: {
      return pokedexApi.getPokemonsSpecies;
    }
    case pokedexActions.getPokemonCardSpecies().type:
    case evolutionActions.getEvolutionSpecies().type:
    case pokedexActions.getPokemonSpecies().type: {
      return pokedexApi.getPokemonSpecies;
    }
    case pokemonActions.getPokemons().type: {
      return pokemonApi.getPokemons;
    }
    case pokedexActions.getPokemonCard().type:
    case evolutionActions.getEvolutionPokemon().type:
    case pokemonActions.getPokemon().type: {
      return pokemonApi.getPokemon;
    }
    case evolutionActions.getEvolutionChain().type: {
      return evolutionApi.getEvolutionChain;
    }
    case evolutionActions.getEvolutionTrigger({}).type: {
      return evolutionApi.getEvolutionTrigger;
    }
    default: {
      return;
    }
  }
};

export default apiCallsMapping;
