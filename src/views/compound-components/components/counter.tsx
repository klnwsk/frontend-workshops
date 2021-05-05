import React from "react";

export function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="bg-red-100 p-6">
      <p className="font-bold mb-3"> {count} </p>
      <button
        onClick={increment}
        className="bg-yellow-300 p-2 shadow-md rounded"
      >
        Increment
      </button>
      <button
        className="bg-yellow-300 shadow-md rounded p-2 ml-2"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}
