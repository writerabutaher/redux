"use client";

import { connect } from "react-redux";
import {
  actionIncrement,
  actionDecrement,
} from "@/components/redux/counter/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-8 p-16 rounded bg-sky-500">
        <div className="px-4 py-2 bg-pink-500 rounded">
          <h1 className="text-4xl text-white">{count}</h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={increment}
            className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(actionIncrement(value)),
    decrement: (value) => dispatch(actionDecrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
