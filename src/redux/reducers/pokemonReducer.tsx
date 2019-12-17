import initialState from "./initialState";
import * as types from "../constants/action-types";

export default function pokemonReducer(state = initialState.pokemon, action) {
  if (action.type == types.LOAD_POKEMON) {
    return action.pokemon;
  }
  return state;
}
