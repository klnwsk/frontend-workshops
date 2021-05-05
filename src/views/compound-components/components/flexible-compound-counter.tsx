import React from "react";

interface CounterContext {
  increment: () => void;
  decrement: () => void;
  count: number;
}

const CounterContext = React.createContext<CounterContext>(
  ({} as unknown) as CounterContext
);

function Button({
  onClick,
  children,
  className = "",
  ...props
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-300 shadow-md rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function FlexibleCompoundCounter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ increment, decrement, count }}>
      {children}
    </CounterContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("Must be used within CounterContextProvider");
  }
  return context;
}

export function CounterIncrement({
  children = "Increment",
}: {
  children?: React.ReactNode | string;
}) {
  const { increment } = useCount();
  return <Button onClick={increment}> {children} </Button>;
}

export function CounterDecrement({
  children = "Decrement",
}: {
  children?: React.ReactNode | string;
}) {
  const { decrement } = useCount();
  return <Button onClick={decrement}> {children} </Button>;
}

export function CounterValue() {
  const { count } = useCount();
  return (
    <p className="font-bold mb-3">
      <span className="text-pink-800 text-xl"> {count} </span>
    </p>
  );
}

FlexibleCompoundCounter.CounterIncrement = CounterIncrement;
FlexibleCompoundCounter.CounterDecrement = CounterDecrement;
FlexibleCompoundCounter.CounterValue = CounterValue;

export default FlexibleCompoundCounter;
