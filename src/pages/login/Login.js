import { useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Home from "../home/Home";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
const history = useHistory();
const { user } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
   if(isPending){
      return <LoadingSpinner />
      }
      if(user){
     history.push('/')
      }
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className="btn">Login</button>}
     
      <Link to="/forget" style={{ marginLeft: "10px" }}>
        forget password
      </Link>
      {error && <div className="error">{error}</div>}
      {/* {!isPending && error && history.push('/')} */}
    </form>
  );
}
