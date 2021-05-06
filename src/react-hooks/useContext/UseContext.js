import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

const ComponentA = () => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <ComponentB></ComponentB>
      <ComponentC></ComponentC>
    </CounterContext.Provider>
  );
};

const ComponentB = () => {
  return (
    <div>
      Component B<ComponentD></ComponentD>
      <ComponentF></ComponentF>
    </div>
  );
};

const ComponentC = () => {
  return (
    <div>
      Component C<ComponentE></ComponentE>
      <ComponentG></ComponentG>
    </div>
  );
};

const ComponentD = () => {
  return <> Component D </>;
};

const ComponentF = () => {
  return <> Component F </>;
};

const ComponentE = () => {
  // Hooks Way
  const { setCounter } = useContext(CounterContext);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>AddCounter</button>
      Component E
    </>
  );
};

const ComponentG = () => {
  // Old way
  return (
    <CounterContext.Consumer>
      {({ counter }) => (
        <>
          {counter}
          Component G
        </>
      )}
    </CounterContext.Consumer>
  );
};

export default ComponentA;
