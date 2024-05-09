import React,{useState}from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {
    const[currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.close} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type="text"placeholder='Your name' required />}
                <input type="email"placeholder='Your email' required />
                <input type="password"placeholder='Your password' required />
            </div>
            <button>{currentState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I agree to the terms of use & privacy policy.</p>
            </div>{
                currentState==="Sign up"?
                <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>:
                <p>Create new account ? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>
            }

        </form>
    </div>
  )
}

export default Loginpopup