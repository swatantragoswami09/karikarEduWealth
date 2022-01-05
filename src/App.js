import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import TermAndCondition from "./pages/termandcondition/TermAndCondition";
import "./App.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Forget from "./pages/forget/Forget";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              {!user && <Home />}
              {user && <Dashboard />}
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact>
              {user && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/forget" exact>
              {user && <Redirect to="/" />}
              {!user && <Forget />}
            </Route>
            <Route
              path="/termandconditions"
              exact
              component={TermAndCondition}
            ></Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
