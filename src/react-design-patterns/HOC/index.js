import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

function HOC() {
  return (
    <div className="App">
      <ClickCounter name="Nikhil"></ClickCounter>
      <HoverCounter name="Ancy" age={12}></HoverCounter>
    </div>
  );
}

export default HOC;
