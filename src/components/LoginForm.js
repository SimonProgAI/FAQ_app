import React from "react";
import { Link } from "react-router-dom";
import Register from "../pages/Register";

const LoginForm = () => {
    
    return(
        <form className="loginForm">
            <label>
                Username
                <input type="text" placeholder="Username"/>
            </label>
            <label>
                Password
                <input type="password" placeholder="Password"></input>
            </label>
            <Link to="/register" element={<Register />}>Register New User</Link>&nbsp;&nbsp;
            <br/>
            <button type="button">Login</button>
        </form>
    );
}

export default LoginForm;