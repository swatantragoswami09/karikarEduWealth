import { useState } from "react";
// import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import "./Signup.css";

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
  // if (isPending) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Distributor Registration</h2>
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
              />
            </label>

            <label>
              <span>Phone:</span>
              <input
                type="number"
                required
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </label>
            <label>
              <span>password:</span>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <label>
              <span>Sub-Brokership Area:</span>
              <input
                type="text"
                required
                onChange={(e) => setSubBrokershipArea(e.target.value)}
                value={subBrokershipArea}
              />
            </label>

            <label>
              <span>PAN No:</span>
              <input
                type="text"
                required
                onChange={(e) => setPan(e.target.value)}
                value={pan}
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
              />
            </label>

            <label>
              <span>Date of Birth (DOB):</span>
              <input
                type="date"
                required
                onChange={(e) => setDob(e.target.value)}
                value={dob}
              />
            </label>

            <label>
              <span>Address:</span>
              <input
                type="text"
                required
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </label>

            <label>
              <span>Adhar No:</span>
              <input
                type="text"
                required
                onChange={(e) => setAdhar(e.target.value)}
                value={adhar}
              />{" "}
            </label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            required
            onChange={() => setTermAndCondition(true)}
            value={termAndCondition}
          />

          <span>
            I agree with <Link to="/termandconditions">terms & conditions</Link>
          </span>
        </div>
        {!isPending && (
          <button className="btn" style={{ margin: "10px 0px" }}>
            Register
          </button>
        )}
        {isPending && <LoadingSpinner />}
        <br />
        Already have an account? <Link to="/login">Login In here</Link>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
