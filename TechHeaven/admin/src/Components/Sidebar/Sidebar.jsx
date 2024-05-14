import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_image} alt="" />
                <p>Add Item</p>
            </NavLink>
            <NavLink to='/List' className="sidebar-option">
                <img src={assets.list} alt="" />
                <p>List Item</p>
            </NavLink>
            <NavLink to='/Orders' className="sidebar-option">
                <img src={assets.order} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar