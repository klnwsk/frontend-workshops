import React from "react";

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

export function CounterIncrement({
  increment,
  children = "Increment",
  ...props
}: {
  children?: React.ReactNode | string;
  increment?: () => {};
  className?: string;
}) {
  return (
    <Button onClick={increment} {...props}>
      {children}
    </Button>
  );
}

export function CounterDecrement({
  decrement,
  children = "Decrement",
  ...props
}: {
  children?: React.ReactNode;
  decrement?: () => {};
}) {
  return (
    <Button onClick={decrement} {...props}>
      {children}
    </Button>
  );
}

export function CounterValue({ value }: { value?: number }) {
  return (
    <p className="font-bold mb-3">
      <span className="text-pink-800 text-xl"> {value} </span>
    </p>
  );
}

const allowedTypes = [CounterValue, CounterIncrement, CounterDecrement];

type CounterProps = {
  increment?: () => void;
  decrement?: () => void;
  value?: number;
};

export function CompoundCounter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (
          React.isValidElement<CounterProps>(child) &&
          child.type === CounterIncrement
        ) {
          return React.cloneElement(child, { increment });
        }
        if (
          React.isValidElement<CounterProps>(child) &&
          child.type === CounterValue
        ) {
          return <>{React.cloneElement(child, { value: count })}</>;
        }
        if (
          React.isValidElement<CounterProps>(child) &&
          child.type === CounterDecrement
        ) {
          return <>{React.cloneElement(child, { decrement })}</>;
        }
        return <>{child}</>;
      })}
    </>
  );
}
