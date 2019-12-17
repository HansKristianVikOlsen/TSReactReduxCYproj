import initialState from "./initialState";
import * as types from "../constants/action-types";

export default function counterReducer(state = initialState.counter, action) {
  if (action.type == types.COUNT_UP) {
    return state + 1;
  } else if (action.type == types.COUNT_DOWN) {
    return state - 1;
  }
  return state;
}
