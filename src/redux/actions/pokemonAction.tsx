import * as types from "../constants/action-types";
import * as api from "../../api/pokeApi";

export function loadPokemonSuccess(pokemon) {
  return { type: types.LOAD_POKEMON, pokemon };
}

export function loadPokemon(name) {
  return function(dispatch) {
    return api.getPokemon(name).then(pokemon => {
      dispatch(loadPokemonSuccess(pokemon));
    });
  };
}
