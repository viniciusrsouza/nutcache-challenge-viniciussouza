import "./App.scss";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getCurrentTheme } from "./themeColors";

function App() {
  console.log(getCurrentTheme());

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
