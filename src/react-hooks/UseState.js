import { useState } from "react";

// All hooks (except custom hooks) should be on top of the function
const UseState = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span className="count">{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default UseState;
