import React from "react";
import { useState, useRef} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

const Login = ({unameSetter}) => {
    const unameRef = useRef();
    const pwordRef = useRef();
    const [errMsgUname, setErrMsgUname] = useState("");
    const [errMsgPword, setErrMsgPword] = useState("");
    
    const navigate = useNavigate();
    
    function handleLogin(e){
        
        e.preventDefault();
       
        const uname = unameRef.current.value;
        const pword = pwordRef.current.value;

        const errMsg1 = "Enter a valid username.";
        const errMsg2 = "Enter a valid password.";

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
                    setErrMsgPword(errMsg2);
                };
            })
            .catch(err=>{
                //console.log(err);
                setErrMsgUname(errMsg1)
            });
        
        if(uname.length === 0){
            setErrMsgUname(errMsg1);
        }else{
            setErrMsgUname("");
        };

        if(pword.length === 0){
            setErrMsgPword(errMsg2);
        }else{
            setErrMsgPword("");
        };
        //console.log('handleLogin called');
        //console.log(`uname: ${uname}`);
        //console.log(`pword: ${pword}`);
    }

    return(
        <form>
            <h1>Login</h1>
            <label>
                Username
                <input ref={unameRef} type="text" placeholder="Username"/>
                <span className="errMsg">{errMsgUname}</span>
            </label>
            <br/>
            <label>
                Password
                <input ref={pwordRef} type="password" placeholder="Password"></input>
                <span className="errMsg">{errMsgPword}</span>
            </label>
            <br/>
            <Link to="/register">Register New User</Link>&nbsp;&nbsp;
            <br/>
            <button onClick={handleLogin}type="button">Login</button>
        </form>
    );
}

export default Login;