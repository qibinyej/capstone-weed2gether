import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser }) {

  return (
    <div className="navbar-links">
      <span>
        <img
          className="mt-2 h-10 w-10"
          src="/marijuana+weed+icon128.png"
          alt="navbar-icon"
        />
      </span>
      <span className="weed-title">
        <strong>Weed 2gether</strong>
      </span>
      <ul>
        {/* <li>
          <Link to="/Test">TEST</Link>
        </li> */}
        <li>
          <Link to="/Posts">Home</Link>
        </li>
        <li>
          <Link to="/Resources">Resources</Link>
        </li>
        {currentUser ? (
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
        ) : null}
        <li className="split">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
