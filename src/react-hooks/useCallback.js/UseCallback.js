import { useCallback, useState } from "react";
import CallbackTitle from "./CallbackTitle";
import CounterButtonOne from "./CounterButtonOne";
import CounterButtonTwo from "./CounterButtonTwo";
import ShowCounterOne from "./ShowCounterOne";
import ShowCounterTwo from "./ShowCounterTwo";

const UseCallback = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = useCallback(() => {
    setCountOne(countOne + 1);
  }, [countOne]);

  const incrementCountTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  return (
    <>
      <CallbackTitle></CallbackTitle>
      <ShowCounterOne counter={countOne}></ShowCounterOne>
      <CounterButtonOne setCounter={incrementCountOne}></CounterButtonOne>
      <ShowCounterTwo counter={countTwo}></ShowCounterTwo>
      <CounterButtonTwo setCounter={incrementCountTwo}></CounterButtonTwo>
    </>
  );
};

export default UseCallback;
