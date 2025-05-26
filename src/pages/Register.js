import '../App.css';
import React from "react";
import {useState, useRef} from "react";
import {useNavigate} from 'react-router-dom';

function Register(){
    const navigate = useNavigate();
    
    const unameRef = useRef();
    const pwordRef = useRef();
    const pwordRepeatRef = useRef();
    
    
    const [errMsgUname, setErrMsgUname] = useState("");
    const [errMsgPword, setErrMsgPword] = useState("");
    const [errMsgPwordRepeat, setErrMsgPwordRepeat] = useState("");
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [checkBoxColor, setCheckBoxColor] = useState({ color: 'black', fontSize: '16px' });
    const [registerCriteria, setRegisterCriteria] = useState(false);

    //const errorMsg1 = "Username already exists.";
    const errorMsg2 = "Invalid username.";
    const errorMsg3 = "Password must contain at least 8 characters and a digit.";
    const errorMsg4 = "The passwords do not match.";
    
    function handleCheckedBox(e){ 
        //console.log(e.target.checked);
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
    //SUPPORTING FUNCTIONS
        function hasNumber(pword1){
            return /\d/.test(pword1);
        };
        function hasLetter(pword1){
            return /[a-zA-Z]/.test(pword1);
        };
    //IFs
        if(uname.length===0){
            setErrMsgUname(errorMsg2);
        };
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
        if(pword.length>7 && hasNumber(pword) && hasLetter(pword) && pword === pwordRepeat){
            setRegisterCriteria(true);
        };
        if(registerCriteria===true){
            let parameter = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(userCreds)
            }
            console.log(parameter);
    
            /*let url = `http://localhost:5000/user`;*/
            let url = `https://server-faq-app.onrender.com/user`
            //console.log(JSON.stringify(userCreds));
           
            fetch(url, parameter)
                .then(res => 
                    res.json()
                )
                .then(json => {
                    console.log(json);
                    navigate('/login');
                })
                .catch(err =>{
                    //console.log(err+"something something")
                    /*
                    if(err.message.code==="ER_DUP_ENTRY"){
                        setErrMsgUname(errorMsg1);
                        setRegisterCriteria(false);
                    }else{
                        console.error(err);
                    }
                    */    
                });
        };
    };

    return(
        <div>
            <form>
                <h1>Register User</h1>
                <label>
                    Username
                    <input ref={unameRef}type="text" placeholder="Username"/>
                    <span className="errMsg">{errMsgUname}</span>
                </label>
                <br/>
                <label>
                    Password
                    <input ref={pwordRef} type="password" placeholder="Password"></input>
                    <span className="errMsg">{errMsgPword}</span>
                </label>
                <br/>
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

export default Register;