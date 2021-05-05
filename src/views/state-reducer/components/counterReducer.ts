export interface State {
  count: number;
}

export function counterReducer(
  state: State,
  { type, initialState }: { type: actions; initialState: State }
): State {
  switch (type) {
    case actionTypes.increment: {
      return { count: state.count + 1 };
    }
    case actionTypes.decrement: {
      return { count: state.count - 1 };
    }
    case actionTypes.reset: {
      return initialState;
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
}

type actions = keyof typeof actionTypes;

export const actionTypes = {
  increment: "increment",
  decrement: "decrement",
  reset: "reset",
} as const;
