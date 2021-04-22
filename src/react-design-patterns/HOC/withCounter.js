import { useState } from "react";

const UpdatedComponent = (ChildComponent, incrementVal) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + incrementVal);
    };
    return (
      <ChildComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      ></ChildComponent>
    );
  };
  return NewComponent;
};

export default UpdatedComponent;
