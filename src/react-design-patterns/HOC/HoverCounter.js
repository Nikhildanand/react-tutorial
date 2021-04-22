import UpdatedComponent from "./withCounter";

const HoverCounter = ({ name, age, count, incrementCount }) => {

  return (
    <h1 onMouseOver={incrementCount}>
      {name}, {age}: Hovered {count} times
    </h1>);
};

export default UpdatedComponent(HoverCounter, 2);
