import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

const HoverProp = (count, incrementCount) => (
  <HoverCounter
    count={count}
    incrementCount={incrementCount}
    name="Ancy"
  ></HoverCounter>
);

const clickProp = (count, incrementCount) => (
  <ClickCounter
    count={count}
    incrementCount={incrementCount}
    name="Nikhil"
  ></ClickCounter>
);

const RPC = () => (
  <div className="App">
    <Counter
      renderProp={HoverProp}
    ></Counter>
    <Counter
      renderProp={clickProp}
    ></Counter>
  </div>
);

export default RPC;
