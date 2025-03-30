import React from "react";
import {useState, useRef, useEffect} from "react";
import '../App.css';


function RegisterForm(){
    //Add a unameRef and check
    //push uname and pword in mysql
    //setUname, setPword  
    
    const unameRef = useRef();
    const pwordRef = useRef();
    const pwordRepeatRef = useRef();
    
    const [errMsgUname, setErrMsgUname] = useState("");
    const [errMsgPword, setErrMsgPword] = useState("");
    const [errMsgPwordRepeat, setErrMsgPwordRepeat] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [checkBoxColor, setCheckBoxColor] = useState({ color: 'black', fontSize: '16px' });

    const errorMsg1 = "Username already exists.";
    const errorMsg2 = "Invalid username.";
    const errorMsg3 = "Invalid password. Enter a password that is at least 8 characters long and contains a number.";
    const errorMsg4 = "The passwords do not match";
    
    function handleCheckedBox(e){ 
        console.log(e.target.checked);
        setTermsAndConditions(e.target.checked);
        if(termsAndConditions){
            setCheckBoxColor({ color: 'black', fontSize: '16px' })
        }else{
            setCheckBoxColor({ color: 'green', fontSize: '16px' });
        };
    };

    function handleRegister(e){
        e.preventDefault();

        const uname = unameRef.current.value;
        const pword = pwordRef.current.value;
        const pwordRepeat = pwordRepeatRef.current.value;

        let userCreds = {};
        userCreds.uname = uname;
        userCreds.pword = pword;

        console.log(userCreds);

        let parameter = {
            method: 'POST'
        }

        let url = `http://localhost:5000/${userCreds}`;

        fetch(url, parameter)
            .then(res => res.json())
            .then(json => 
                console.log(JSON.stringify(json)));

    //SUPPORTING FUNCTIONS
        function hasNumber(pword1){
            return /\d/.test(pword1);
        };
        function hasLetter(pword1){
            return /[a-zA-Z]/.test(pword1);
        };
    //IFs
        //IF uname already exist
        
        if(uname.length===0){
            setErrMsgUname(errorMsg2);
        }
        if(pword.length<8 || !hasNumber(pword) || !hasLetter(pword)){
            //console.log(errorMsg3);
            setErrMsgPword(errorMsg3);
        }else{
            setErrMsgPword("");
        };

        if(pword !== pwordRepeat){
            //console.log(errorMsg4);
            setErrMsgPwordRepeat(errorMsg4);
        }else{
            setErrMsgPwordRepeat("");
        };

        if(!termsAndConditions){
            setCheckBoxColor({ color: 'red', fontSize: '16px' });
            //console.log(checkBoxColor);
        };
    };

    //Navigate to login
    //Navigate to dashboard

    return(
        <div>
            <h1>Register User</h1>
            <form className="loginForm">
                <label>
                    Username
                    <input ref={unameRef}type="text" placeholder="Username"/>
                    <span className="errMsg">{errMsgUname}</span>
                </label>
                <label>
                    Password
                    <input ref={pwordRef} type="password" placeholder="Password"></input>
                    <span className="errMsg">{errMsgPword}</span>
                </label>
                <label>
                    Repeat Password
                    <input ref={pwordRepeatRef} type="password" placeholder="Password"></input>
                    <span className="errMsg">{errMsgPwordRepeat}</span>
                </label>
                <br/>
                <label style={checkBoxColor}>
                    <input type="checkbox" defaultChecked={termsAndConditions} onChange={handleCheckedBox}/>
                    I accept the terms and conditions.
                </label>
                <br/>
                <button onClick={handleRegister}>Register User</button>
            </form>
        </div>
    );
};

export default RegisterForm;