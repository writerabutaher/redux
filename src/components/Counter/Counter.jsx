"use client";

import { connect } from "react-redux";
import {
  actionIncrement,
  actionDecrement,
} from "@/components/redux/counter/actions";
import {
  actionIncrement as dynamicIncrement,
  actionDecrement as dynamicDecrement,
} from "@/components/redux/dynamicCounter/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="flex flex-col items-center gap-8 p-16 rounded bg-sky-500">
      <div className="px-4 py-2 bg-pink-500 rounded">
        <h1 className="text-4xl text-white">{count}</h1>
      </div>
      <div className="space-x-4">
        <button
          onClick={() => increment(5)}
          className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => decrement(5)}
          className="px-4 py-2 text-2xl text-white bg-pink-500 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: (value) =>
      dispatch(
        ownProps.dynamic ? dynamicIncrement(value) : actionIncrement(value)
      ),
    decrement: (value) =>
      dispatch(
        ownProps.dynamic ? dynamicDecrement(value) : actionDecrement(value)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
