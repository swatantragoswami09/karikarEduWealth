import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import Home from "../home/Home";
import CommonSnackbar from "../../common/Snackbar";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/logo.svg";

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
  let snackbar;
  if (isPending && !error) {
    return <LoadingSpinner />;
  }
  if (!isPending && !error) {
    snackbar = (
      <CommonSnackbar message="User Login successfully" statusCode="200" />
    );
  }
  if (!isPending && error) {
    snackbar = <CommonSnackbar message={error} statusCode="400" />;
  }
  if (user) {
    history.push("/");
  }
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <img
        src={logo}
        style={{
          height: "100px",
          width: "100px",
        }}
      />
      <label>
        <span>Email:</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ width: "450px" }}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={{ width: "450px" }}
        />
      </label>

      {!isPending && <button className="btn">Login</button>}

      <Link to="/forget" style={{ marginLeft: "10px" }}>
        forget password
      </Link>
      <span style={{ marginTop: "20px" }}>
        Don't have an account{" "}
        <Link to="/signup">
          {" "}
          <p style={{ marginLeft: "10px" }}>Register here</p>
        </Link>
      </span>
      {error && snackbar}
      {/* {!isPending && error && history.push('/')} */}

      {/* {snackbar } */}
    </form>
  );
}
