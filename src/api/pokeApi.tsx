import { handleResponse, handleError } from "./apiUtils";

const url = "https://pokeapi.co/api/v2/pokemon/";
export function getPokemon(name) {
  return fetch(url + name)
    .then(handleResponse)
    .catch(handleError);
}
