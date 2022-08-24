import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser }) {

  return (
    <div className="navbar-links">
        <img
          className="mt-2 h-10 w-10"
          src="/marijuana+weed+icon128.png"
          alt="navbar-icon"
        />
      <h1 className="weed-title">
        <strong>weed2gether</strong>
      </h1>
      <ul>
        <li>
          <Link to="/Posts">Home</Link>
        </li>
        <li>
          <Link to="/Articles">News</Link>
        </li>
        <li>
          <Link to="/Resources">Resources</Link>
        </li>
        {currentUser ? (
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
        ) : null}
        <li className="split float-right">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
