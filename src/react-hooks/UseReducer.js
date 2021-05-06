import { useReducer } from "react";

const types = {
  // Action Types
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  // Reducer
  switch (action.type) {
    case types.INCREMENT:
      return { count: state.count + 1 };
    case types.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCount = () => {
    dispatch({ type: types.INCREMENT }); // Dispatching Actions
  };

  const decrementCount = () => {
    dispatch({ type: types.DECREMENT }); // Dispatchinf Actions
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span style={{ margin: "1rem" }}>{state.count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default UseReducer;
