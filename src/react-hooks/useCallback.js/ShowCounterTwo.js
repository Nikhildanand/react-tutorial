import React, { useEffect } from "react";

const ShowCounterTwo = ({ counter }) => {
  useEffect(() => console.log("Counter two rerendered"));

  return <div>{counter}</div>;
};

export default React.memo(ShowCounterTwo);
