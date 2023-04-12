import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="m-4">
      <h1 className="mb-4 font-semibold text-4xl underline">View Templates</h1>
      <ul className="mx-6 list-decimal">
        <li><NavLink className="cursor-pointer text-blue-500 hover:text-red-500" to="/Navbar1">Navbar1</NavLink></li>
        <li><NavLink className="cursor-pointer text-blue-500 hover:text-red-500" to="/Footer1">Footer1</NavLink></li>
      </ul>
    </div>
  );
}

export default Home;
