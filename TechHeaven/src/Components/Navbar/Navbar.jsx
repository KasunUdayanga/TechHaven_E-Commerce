import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("item")} className={menu==="item" ? "active":""}>Item</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("contact us")} className={menu==="contact us" ? "active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""className="search_icon" />
            <div className="navbar-search_icon">
                <img src={assets.busket} alt="" className="busket" />
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
        </div>
        </div>
  )
}

export default Navbar