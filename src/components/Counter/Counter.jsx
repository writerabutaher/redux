"use client";

import { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-sky-500 rounded p-16 flex flex-col items-center gap-8">
        <div className="px-4 py-2 bg-pink-500 rounded">
          <h1 className="text-4xl text-white">{count}</h1>
        </div>
        <div className="space-x-4">
          <CounterButton setCount={setCount}>Increment</CounterButton>
          <CounterButton setCount={setCount}>Decrement</CounterButton>
        </div>
      </div>
    </div>
  );
};

export default Counter;
