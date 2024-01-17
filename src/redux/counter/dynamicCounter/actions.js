import { DINCREMENT, DDECREMENT } from "./actionTypes";

export const actionIncrement = (value) => {
  return { type: DINCREMENT, payload: value };
};

export const actionDecrement = (value) => {
  return { type: DDECREMENT, payload: value };
};
