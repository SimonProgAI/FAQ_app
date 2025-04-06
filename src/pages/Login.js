import '../App.css';
import React from "react";
import { useState, useRef, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = ({uname, unameSetter}) => {
    const unameRef = useRef();
    const pwordRef = useRef();
    const [errMsgCred, setErrMsgCred] = useState("");
   
    const navigate = useNavigate();

    function handleLogin(e){
        
        e.preventDefault();
       
        const uname = unameRef.current.value;
        const pword = pwordRef.current.value;

        const errMsg = "Enter valid login credentials.";
       

        let loginCreds = {};
        loginCreds.uname = uname;
        loginCreds.pword = pword;
        //console.log(loginCreds);

        let parameters = {
            method: "GET"
        }

        let url = `http://localhost:5000/user/${loginCreds.uname}`;

        fetch(url, parameters)
            .then(res => res.json())
            .then(json => {
                //console.log(json.user[0]);
                if(json.user[0].pword === loginCreds.pword){
                    console.log("password is correct");
                    unameSetter(json.user[0].uname);
                    //console.log(json.user[0].uname);
                    //console.log(`JSON returned from the server: ${json} `);
                    navigate('/');
                }else{
                    setErrMsgCred(errMsg);
                };
            })
            .catch(err=>{
                //console.log(err);
                setErrMsgCred(errMsg)
            });
        
        if(uname.length === 0){
            setErrMsgCred(errMsg);
        }else{
            setErrMsgCred("");
        };

        if(pword.length === 0){
            setErrMsgCred(errMsg);
        }else{
            setErrMsgCred("");
        };
        //console.log('handleLogin called');
        //console.log(`uname: ${uname}`);
        //console.log(`pword: ${pword}`);
    }

    useEffect(()=>{
        if (uname){
        navigate('/');
    };
    },[uname, navigate]);
    

    return(
        <form>
            <h1>Login</h1>
            <label>
                Username
                <input ref={unameRef} type="text" placeholder="Username"/>
                <span className="errMsg">{errMsgCred}</span>
            </label>
            <br/>
            <label>
                Password
                <input ref={pwordRef} type="password" placeholder="Password"></input>
                <span className="errMsg">{errMsgCred}</span>
            </label>
            <br/>
            <Link to="/register">Register New User</Link>&nbsp;&nbsp;
            <br/>
            <button onClick={handleLogin}type="button">Login</button>
        </form>
    );
}

export default Login;