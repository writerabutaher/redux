"use client";

import { actionDecrement, actionIncrement } from "@/redux/counter/actions";
import { useDispatch, useSelector } from "react-redux";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(actionIncrement(value));
  };

  const decrementHandler = (value) => {
    dispatch(actionDecrement(value));
  };

  return (
    <div className="flex flex-col items-center gap-8 p-16 rounded bg-sky-500">
      <div className="px-4 py-2 bg-pink-500 rounded">
        <h1 className="text-4xl text-white">{count}</h1>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => incrementHandler()}
          className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => decrementHandler()}
          className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
