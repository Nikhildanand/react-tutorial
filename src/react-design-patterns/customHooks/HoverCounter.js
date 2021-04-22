import useCounter from "../../hooks/useCounter";

const HoverCounter = () => {

  const {count, incrementCount} = useCounter(0, 5)

  return <h1 onMouseOver={incrementCount}>
    Hovered {count} times
  </h1>;
};

export default HoverCounter;
