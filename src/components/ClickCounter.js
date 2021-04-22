import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
