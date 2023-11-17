import React from "react";

const CounterButton = ({ children }) => {
  return (
    <button className="text-2xl py-2 px-4 text-white bg-pink-500 rounded">
      {children}
    </button>
  );
};

export default CounterButton;
