import React, { useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {

  const [item, setItem] = useState("home");

  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
  const navigate= useNavigate();

  const logout= ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setItem("home")}
          className={item === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setItem("item")}
          className={item === "item" ? "active" : ""}
        >
          Item
        </a>
        <a
          href="#app-download"
          onClick={() => setItem("mobile-app")}
          className={item === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setItem("contact us")}
          className={item === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search_icon" />
        <div className="navbar-search_icon">
          <Link to="/cart">
            <img src={assets.busket} alt="" className="busket" /> 
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token?<button onClick={() => setShowLogin(true)}>Sign in</button>
        :<div className="navbar-profile">
          <img src={assets.profile} alt="" />
          <ul className="navbar-profile-dropdown">
            <li><img src={assets.bag} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
          </ul>  
          </div>}
      </div>
    </div>
  );
};

export default Navbar;
