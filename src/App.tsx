import React, { ReactElement } from "react";
import { Counter } from "./Counter";
import {
  CompoundCounter,
  CounterDecrement,
  CounterIncrement,
  CounterValue
} from "./CompoundCounter";
import FlexibleCompoundCounter from "./FlexibleCompoundCounter";
import "./styles.css";

function Title({ children }: { children: ReactElement | string }) {
  return <h1 className="text-red-300 text-3xl"> {children} </h1>;
}

function SubTitle({ children }: { children: ReactElement | string }) {
  return <h2 className="text-red-300 text-xl"> {children} </h2>;
}

export default function App() {
  return (
    <div className="App py-6 bg-indigo-900 min-h-screen">
      <Title>React Patterns - Compound Components</Title>

      <div className="my-4">
        <SubTitle> Default Counter </SubTitle>
      </div>

      <div className="w-6/12 mx-auto">
        <Counter />
      </div>

      <p className="text-red-300 py-4">
        Problem: We have to modify original component to change anything
      </p>

      <div className="my-4">
        <SubTitle> Compound Counter </SubTitle>
      </div>

      <div className="w-6/12 mx-auto">
        <div className="bg-red-300 p-6">
          <CompoundCounter>
            <CounterIncrement />
            <CounterDecrement> Decrement 2 </CounterDecrement>
            <CounterValue />
          </CompoundCounter>
        </div>
      </div>
      <p className="text-red-300 py-4">
        Problem: If I add any wrapper between it will break
      </p>

      <div className="my-4">
        <SubTitle> Flexible Compound Counter </SubTitle>
      </div>

      <div className="w-6/12 mx-auto">
        <div className="bg-pink-600 p-6">
          <FlexibleCompoundCounter>
            <FlexibleCompoundCounter.CounterIncrement />
            <FlexibleCompoundCounter.CounterValue />
            <FlexibleCompoundCounter.CounterDecrement />
          </FlexibleCompoundCounter>
        </div>
      </div>
    </div>
  );
}
