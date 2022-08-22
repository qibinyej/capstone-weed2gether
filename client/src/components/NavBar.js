import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar({ currentUser }) {
  return (
    <div className="navbar-links">
      <img
        className="mt-2 h-10 w-10"
        src="/marijuana+weed+icon128.png"
        alt="navbar-icon"
      />
      <ul>
        <li>
          <strong>Weed 2gether</strong>
        </li>
        <li>
          <Link to="/Test">TEST</Link>
        </li>
        <li>
          <Link to="/Posts">Home</Link>
        </li>
        <li>
          <Link to="/Resources">Resources</Link>
        </li>
        {currentUser ? (
          <li><Link to="/MyPage">My Page</Link></li>
        ) : null}
        {currentUser ? <Logout /> : null}
        <li className="split">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
