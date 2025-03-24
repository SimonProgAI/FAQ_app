import React from "react";
import {useState, useRef} from "react";

function RegisterForm(){
    
    const pwordRef = useRef();
    const pwordRepeatRef = useRef();
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    
    function handleCheckedBox(e){ 
        console.log(e.target.checked);
        setTermsAndConditions(e.target.checked);
    }
    function passwordCheck(e){
        e.preventDefault();
        const pword = pwordRef.current.value;
        console.log(pword);
        const pwordRepeat = pwordRepeatRef.current.value;
        console.log(pwordRepeat);
        
        const errorMsg1 = "Enter a password that is at least 8 characters long and contains a digit.";
        const errorMsg2 = "The passwords do not match.";
        const errorMsg3 = "The password must contain at least one digit.";
        const errorMsg4 = "The password must contain at least one letter."
        const successMsg = "The passwords match."

        function hasNumber(pword1){
            return /\d/.test(pword1);
        };
        function hasLetter(pword1){
            const regExp = /[a-zA-Z]/;
            return regExp.test(pword1);
        };

        if(pword.length<8){
            console.log(errorMsg1);
        };
        if (!hasNumber(pword)){
            console.log(errorMsg3);
        };
        if(!hasLetter(pword)){
            console.log(errorMsg4)
        }
        if(pword !== pwordRepeat){
            console.log(errorMsg2);
        };
        //success message should display only if ALL conditions are met
        if(pword === pwordRepeat&&pword.length>7&&hasNumber(pword)){
            console.log(successMsg);
        };
    }

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
};

export default RegisterForm;