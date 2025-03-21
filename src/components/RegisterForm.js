import React from "react";

const RegisterForm = () => {
    return(
        <div>
            <h1>Register User</h1>
            <form className="loginForm">
                <label>
                    Username
                    <input type="text" placeholder="Username"/>
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Password"></input>
                </label>
                <label>
                    Repeat Password
                    <input type="password" placeholder="Password"></input>
                </label>
                <button type="button">Register User</button>
            </form>
        </div>
    );
}

export default RegisterForm;