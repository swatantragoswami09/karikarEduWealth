import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Logo</Link>
            <span>
              <Link to="/login"> Karikar Eduwealth Pvt Ltd.</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
