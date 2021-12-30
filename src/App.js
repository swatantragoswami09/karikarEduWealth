import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./pages/login/Login";
import signup from "./pages/signup/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Karikar EduWealth Project</h1>
        <Switch>
          <Route path="/login" exact component={login} />
          <Route path="/signup" exact component={signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
