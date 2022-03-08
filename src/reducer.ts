//@ts-check
/**
 * @param {string} action type makes the number increse or decrese
 */

import { Action, State } from "./store";
export const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
