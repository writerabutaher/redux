import { counterReducer } from "./counter/counterReducer";
import { createStore } from "@reduxjs/toolkit";

export const store = createStore(counterReducer);
