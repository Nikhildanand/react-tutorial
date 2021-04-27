import { useState } from "react";

const UseMemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = () => {
    setCountOne((prevCount) => prevCount + 1);
  };

  const incrementCountTwo = () => {
    setCountTwo((prevCount) => prevCount + 1);
  };

  const isEven = () => {
    for (let i = 0; i < 2000000000; i++);
    return countOne % 2 === 0;
  };

  return (
    <div>
      <button onClick={incrementCountOne}>Clicked {countOne} times</button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <div style={{ marginTop: "10px" }}>
        <button onClick={incrementCountTwo}>Clicked {countTwo} times</button>
      </div>
    </div>
  );
};

export default UseMemo;
