import { memo, useEffect } from "react";

const CounterButtonOne = ({ setCounter }) => {
  useEffect(() => console.log("Button one rerendered"));
  return <button onClick={setCounter}>Set Counter One</button>;
};

export default memo(CounterButtonOne);
