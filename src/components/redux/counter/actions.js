import { INCREMENT, DECREMENT } from "./actionTypes";

export const actionIncrement = (value) => {
  return { type: INCREMENT, payLoad: value };
};

export const actionDecrement = (value) => {
  return { type: DECREMENT, payLoad: value };
};
