import { useState } from "react";

const Counter = ({ renderProp }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return renderProp(count, incrementCount);
};

export default Counter;
