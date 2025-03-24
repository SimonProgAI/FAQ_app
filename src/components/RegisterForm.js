import React from "react";

const RegisterForm = ({pwordRef, pwordRepeatRef, passwordCheck ,termsAndConditions, handleCheckedBox}) => {
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
                    <input ref={pwordRef} type="password" placeholder="Password"></input>
                </label>
                <label>
                    Repeat Password
                    <input ref={pwordRepeatRef} type="password" placeholder="Password"></input>
                </label>
                <br/>
                <label>
                    <input type="checkbox" defaultChecked={termsAndConditions} onChange={handleCheckedBox}/>
                    I accept the terms and conditions.
                </label>
                <br/>
                <button onClick={passwordCheck}>Register User</button>
            </form>
        </div>
    );
}

export default RegisterForm;