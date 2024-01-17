import { combineReducers } from "redux";
import { dynamicCounterReducer } from "./counter/dynamicCounter/reducer";
import { counterReducer } from "./counter/reducer";
import { filterReducer } from "./todos/filterTodos/reducer";
import { todoReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
