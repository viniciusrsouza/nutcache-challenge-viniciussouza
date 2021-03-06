import "./App.scss";
import { Redirect, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
