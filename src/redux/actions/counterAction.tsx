import * as types from "../constants/action-types";

export function counterActionUP() {
  return { type: types.COUNT_UP };
}
export function counterActionDOWN() {
  return { type: types.COUNT_DOWN };
}
