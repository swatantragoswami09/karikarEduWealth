import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import LoadingSpinner from "../common/LoadingSpinner/LoadingSpinner";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  const history = useHistory();
  if (isPending) {
    return <LoadingSpinner />;
  }
  if (user) {
    history.push("/");
  }
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li className="logo">
            <Link to="/"> {/* <img src={Temple} alt="dojo logo" /> */}</Link>
            <span>
              <Link to="/"> The Karikar</Link>
            </span>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li style={{ marginLeft: "10px", marginRight: "10px" }}>
                {!isPending && (
                  <button className="btn" onClick={logout}>
                    Logout
                  </button>
                )}
                {/* {isPending && (
                  <button className="btn" onClick={logout} disabled>
                    Logging out...
                  </button>
                )} */}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
