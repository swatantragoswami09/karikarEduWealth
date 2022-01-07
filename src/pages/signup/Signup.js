import { useState } from "react";
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import CommonSnackbar from "../../common/Snackbar";
import "./Signup.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import logo from "../../assets/logo.svg";

export default function Signup() {
  const [referalCode, setReferalCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState();
  const [subBrokershipArea, setSubBrokershipArea] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [adhar, setAdhar] = useState("");
  const [termAndCondition, setTermAndCondition] = useState(false);
  const { user } = useAuthContext();

  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      // referalCode,
      name,
      phone,
      email,
      password,
      dob,
      subBrokershipArea,
      address,
      pan,
      adhar,
      termAndCondition
    );
    signup(
      email,
      password,
      name,
      phone,
      subBrokershipArea,
      address,
      pan,
      adhar,
      termAndCondition
    );
  };

  let snackbar;
  if (isPending) {
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
  return (
    <div className="main-container">
      <h1>Distributor Registration</h1>
      <img src={logo} style={{ height: "300px", width: "300px" }} />
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="right-content">
            <label>
              <span>Referal code (optional):</span>
              <input
                type="text"
                required
                onChange={(e) => setReferalCode(e.target.value)}
                value={referalCode}
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>Phone:</span>
              <input
                type="number"
                required
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                style={{ width: "300px" }}
              />
            </label>
            <label>
              <span>password:</span>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ width: "300px" }}
              />
            </label>
            <label>
              <span>Sub-Brokership Area:</span>
              <input
                type="text"
                required
                onChange={(e) => setSubBrokershipArea(e.target.value)}
                value={subBrokershipArea}
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>PAN No:</span>
              <input
                type="text"
                required
                onChange={(e) => setPan(e.target.value)}
                value={pan}
                style={{ width: "300px" }}
              />
            </label>
          </div>
          <div className="left-content">
            <label>
              <span>Name:</span>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>email:</span>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="karikar@gmail.com"
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>Date of Birth (DOB):</span>
              <input
                type="date"
                required
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>Address:</span>
              <input
                type="text"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                style={{ width: "300px" }}
              />
            </label>

            <label>
              <span>Adhar No:</span>
              <input
                type="text"
                required
                onChange={(e) => setAdhar(e.target.value)}
                value={adhar}
                style={{ width: "300px" }}
              />{" "}
            </label>
          </div>
        </div>
        {/* <div> */}
        <span className="termsAndCondition">
          <input
            type="checkbox"
            required
            onChange={() => setTermAndCondition(!termAndCondition)}
            value={termAndCondition}
            style={{ cursor: "pointer" }}
          />
          <p> I agree with </p>
          <Link to="/termandconditions">
            <p style={{ marginLeft: "10px" }}> terms & conditions</p>
          </Link>
        </span>
        {/* </div> */}
        {!isPending && (
          <button
            className="signup-btn"
            style={{ margin: "10px 0px", cursor: "pointer" }}
          >
            Register
          </button>
        )}
        <br />
        Already have an account? <Link to="/login">Login In here</Link>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
