import React from "react";

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
            <button type="button">Login</button>
        </form>
    );
}

export default LoginForm;