import * as React from "react";
import {
  counterReducer,
  actionTypes,
  State as CounterState,
} from "./counterReducer";

function useCounter(initialState: CounterState, reducer = counterReducer) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const increment = () =>
    dispatch({ type: actionTypes.decrement, initialState: { count: 1 } });
}
