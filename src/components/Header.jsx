import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex items-center justify-between px-12 shadow-xl">
      <div className="logo-container">
        <img className="w-[100px]" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex gap-12 list-none items-center">
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            <Link to={"/about"}> About Us</Link>
          </li>
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="px-6 py-3 bg-[crimson] text-white font-bold cursor-pointer outline-none border-none rounded-2xl"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
