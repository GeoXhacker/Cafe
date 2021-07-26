import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OutlinedCard from "./components/Cart/Cart";
import Home from "./components/Home";
import NavBar from "./components/Home/navbar";
import ToolBar from "./components/Home/toolbar";
import Recents from "./components/Recents";
import SignIn from "./components/Account/login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/cart">
            <OutlinedCard />
          </Route>
          <Route path="/history">
            <Recents />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
        </Switch>

        <ToolBar />
      </Router>
    </div>
  );
}

export default App;
