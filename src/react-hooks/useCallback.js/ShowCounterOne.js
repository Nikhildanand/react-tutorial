import { memo, useEffect } from "react";

const ShowCounterOne = ({ counter }) => {
  useEffect(() => console.log("Counter one rerendered"));

  return <div>{counter}</div>;
};

export default memo(ShowCounterOne);
