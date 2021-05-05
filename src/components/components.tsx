import { ReactElement } from "react";

interface Typography {
  children: ReactElement | string;
  className?: string;
}

export function Title({ children, className = "" }: Typography) {
  return <h1 className={`text-red-300 text-5xl ${className}`}> {children} </h1>;
}

export function SubTitle({ children, className = "" }: Typography) {
  return <h2 className={`text-red-300 text-3xl ${className}`}> {children} </h2>;
}
