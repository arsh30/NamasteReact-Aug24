import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // how to access the context
  const data = useContext(UserContext); // it return the object in which the key is present
  const { loggedInUser } = data;
  const cartItems = useSelector((store) => store.cart.items);
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
          <li className="font-[500] uppercase transition-all duration-300 hover:text-[crimson] hover:cursor-pointer">
            <Link to={"/cart"}>Cart- ({cartItems.length}- items)</Link>
          </li>
          <button
            className="px-6 py-3 bg-[crimson] text-white font-bold cursor-pointer outline-none border-none rounded-2xl"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
