import "./App.css";
import { Switch, Route, BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import UseReducer from "./react-hooks/UseReducer";
// import UseContext from "./react-hooks/useContext/UseContext";
// import UseCallback from "./react-hooks/useCallback.js/UseCallback";
// import UseMemo from "./react-hooks/UseMemo";
// import UseRef from "./react-hooks/UseRef";
// import CustomHooks from "./react-design-patterns/customHooks";
// import UseState from "./react-hooks/UseState";
import HOC from "./react-design-patterns/HOC";
import RPC from "./react-design-patterns/RPC";

const App = () => {
  const history = useHistory()
  const goToHOC = () => {
    history.push("/hoc")
  }
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li onClick={goToHOC}>
              HOC
            </li>
            <li >
            <Link to="/">RPC</Link>
            </li>
            <li>
              CustomHooks
            </li>
          </ul>
        </nav>
        <div style={{backgroundColor: "red"}}>
          <Switch>
            <Route path="/" component={RPC} exact />
            <Route path="/hoc" component={HOC} />
          </Switch>
        </div>
        {/* <CustomHooks></CustomHooks> */}
        {/* <UseState></UseState> */}
        {/* <UseRef></UseRef> */}
        {/* <UseMemo></UseMemo> */}
        {/* <UseCallback></UseCallback> */}
        {/* <UseContext></UseContext> */}
        <UseReducer></UseReducer>
      </div>
    </Router>
  );
};

export default App;
