import {
  ADDTODO,
  CHOOSECOLOR,
  CLEARCOMPLETED,
  COMPLETEALLTODO,
  COMPLETESINGLETODO,
  DELETESINGLETODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADDTODO,
    payload: todoText,
  };
};

export const chooseColor = (todoID, colorType) => {
  return {
    type: CHOOSECOLOR,
    payload: {
      todoID,
      colorType,
    },
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};

export const completeAllTodo = () => {
  return {
    type: COMPLETEALLTODO,
  };
};

export const completeSingleTodo = (todoID) => {
  return {
    type: COMPLETESINGLETODO,
    payload: todoID,
  };
};

export const deleteSingleTodo = (todoID) => {
  return {
    type: DELETESINGLETODO,
    payload: todoID,
  };
};
