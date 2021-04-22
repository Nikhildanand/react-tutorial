import { useState } from "react";

const useCounter = (intialValue = 0, incrementVal = 1) => {
  const [count, setCount] = useState(intialValue);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + incrementVal);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - incrementVal);
  };

  return {count, incrementCount, decrementCount};
}

export default useCounter;
