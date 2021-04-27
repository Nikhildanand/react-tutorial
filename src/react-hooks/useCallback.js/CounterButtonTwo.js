import { memo, useEffect } from "react";

const CounterButtonTwo = ({ setCounter }) => {
  useEffect(() => console.log("Button two rerendered"));

  return <button onClick={setCounter}>Set Counter Two</button>;
};

export default memo(CounterButtonTwo);
