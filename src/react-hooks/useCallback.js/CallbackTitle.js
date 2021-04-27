import { memo, useEffect } from "react";

const CallbackTitle = () => {
  useEffect(() => console.log("Title rerendered"));
  return <h1>Use Callback</h1>;
};

export default memo(CallbackTitle);
