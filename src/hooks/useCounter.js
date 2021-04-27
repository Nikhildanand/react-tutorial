import { useState } from "react";

const useCounter = (intialValue = 0, changeVal = 1) => {
  const [count, setCount] = useState(intialValue);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + changeVal);
  };

  const decrementCount = () => {
    setCount(count - changeVal);
    setCount(count - changeVal);
  };

  return { count, incrementCount, decrementCount };
};

export default useCounter;
