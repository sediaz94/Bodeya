import React, { useContext, useRef } from "react"
import "./login.css"


export default function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(Context)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
    }

    console.log(user)
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="assets/logo.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <input type="email" placeholder="Email" ref={email} />
                    <input type="password" placeholder="Password" ref={password} />
                    <button className="loginButton" onClick={handleClick}>Log In</button>
                    <span className="forgot">Forgot Password?</span>
                    <button className="registerButton">Create a New Account</button>
                </form>
            </div>
        </div>
    )
}

