import UpdatedComponent from "./withCounter";

const ClickCounter = ({ name, count, incrementCount }) => {
  const handleClick = () => {
    return incrementCount()
  }
  return (
    <div>
      <button onClick={handleClick}>
        {name}:Clicked {count} times
      </button>
    </div>
  );
};

export default UpdatedComponent(ClickCounter, 5);
