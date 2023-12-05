import { INCREMENT, DECREMENT } from "./actionTypes";

export const actionIncrement = (value) => {
  return { type: INCREMENT, payload: value };
};

export const actionDecrement = (value) => {
  return { type: DECREMENT, payload: value };
};
