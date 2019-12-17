import counter from "./counterReducer";
import pokemon from "./pokemonReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter,
  pokemon
});

export default rootReducer;
