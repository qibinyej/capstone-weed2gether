import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ updateUser }) {
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        console.log("Logged out!");
        updateUser(res);
        // setDeletePost(res)
        history("/posts");
      } else {
        res.json().then(console.log("Try again... "));
      }
    });
  };

  return (
    <div className="float-right "> 
      <button
        onClick={handleLogout}
        className=" bg-white border border-gray-400 rounded py-1 px-1 items-center justify-center text-sm font-sm text-black hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
      >
        log out
      </button>
    </div>
  );
}

export default Logout;
