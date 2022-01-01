import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./pages/login/Login";
import signup from "./pages/signup/Signup";
import home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/login" exact component={login} />
          <Route path="/signup" exact component={signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
