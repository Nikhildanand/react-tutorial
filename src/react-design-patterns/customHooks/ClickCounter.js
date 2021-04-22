import useCounter from "../../hooks/useCounter";

const ClickCounter = ({ name }) => {
  
  const {count, decrementCount} = useCounter(10, 2);

  return (
    <div>
      <button onClick={decrementCount}>
        {name}: Clicked {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
