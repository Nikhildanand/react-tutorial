import { useState } from "react";

const HoverCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return <h1 onMouseOver={incrementCount}>
    Hovered {count} times
  </h1>;
};

export default HoverCounter;
