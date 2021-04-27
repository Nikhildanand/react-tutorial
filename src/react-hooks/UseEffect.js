import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("Runs after EVERY rendering");
  });

  useEffect(() => {
    // Write side effects here (API call)
    console.log(
      "Runs ONCE after initial rendering, componentDidMount equivalent"
    );
  }, []);

  useEffect(() => {
    // Write side effects here (API call)
    console.log("renders after every dependency changes");
  }, ["dependencyOne", "dependencyTwo"]);

  useEffect(() => {
    return () => {
      // Do unsubscribe, clear intervals, remove event listeners etc
      console.log("Clean up Code, equivalent to componentWillUnmount");
    };
  }, []);

  return <div></div>;
};

export default UseEffect;
