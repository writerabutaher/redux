const Counter = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-sky-500 rounded p-16 flex flex-col items-center gap-8">
        <div className="px-4 py-2 bg-pink-500 rounded">
          <h1 className="text-4xl text-white">{value}</h1>
        </div>
        <div className="space-x-4">
          <button className="text-2xl py-2 px-4 text-white bg-pink-500 rounded">
            Increment
          </button>
          <button className="text-2xl py-2 px-4 text-white bg-pink-500 rounded">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
