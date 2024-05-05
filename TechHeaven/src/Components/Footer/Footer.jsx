import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='logo' />
                <p>Explore our latest tech innovations. Shop securely. Enjoy fast shipping. Discover exclusive deals. Contact our support team. Connect with us!</p>
                <div className="footer-social-icons">
                    <img src={assets.fb} alt="" />
                    <img src={assets.x} alt="" />
                    <img src={assets.linkdin} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 777123456</li>
                    <li>Techheaven@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright © 2024 TechHeaven. All rights reserved.</p>
        </div>
  )
}

export default Footer