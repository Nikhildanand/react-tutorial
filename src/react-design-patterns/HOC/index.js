import { Link, useHistory } from "react-router-dom";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function HOC() {
  const history = useHistory()
  const gotoRPC = () => {
    console.dir(history)
    // history.goBack()
  }
  return (
    <div className="App">
      <div onClick={gotoRPC}>RPC</div>
      <ClickCounter name="Nikhil"></ClickCounter>
      <HoverCounter name="Ancy" age={12}></HoverCounter>
    </div>
  );
}

export default HOC;
