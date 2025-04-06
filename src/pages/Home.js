import '../App.css';
import React from "react";
import {useState, useEffect, useRef, useCallback} from 'react';
import { useNavigate } from "react-router-dom";

function Home({uname, unameSetter}){

   const [categoryArea, setCategoryArea] = useState ("");
   const [categoryAreaArray] = useState([
        {id: '1', name: 'category_1'},
        {id: '2', name: 'category_2'},
        {id: '3', name: 'category_3'},
        {id: '4', name: 'category_4'},
        {id: '5', name: 'category_5'}
   ]);
   const [questionArea, setQuestionArea] = useState();
   const [questionDisplay, setQuestionDisplay] = useState("");
   const [answerDisplay, setAnswerDisplay] = useState("");
   const [category, setCategory] = useState('category_1');
   
   const userQuestionRef = useRef();
   
   const navigate = useNavigate();
   
   const handleQnSub = useCallback((e) =>{
        e.preventDefault();
        const userQuestion = userQuestionRef.current.value;
       // console.log(`userQuestion: ${JSON.stringify(userQuestion)}`);
        
       let url = `http://localhost:5000/user/question`;
        let parameter = {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ question: userQuestion }),
            mode: 'cors'
        };
        //console.log(parameter);
        //Try/Catch
        fetch(url, parameter)
            .then(res => res.json())
            .then(json => {console.log(json)})
            .catch(err => {console.log(err)})
    },[])
               
    useEffect(()=>{
        const categoryMap = categoryAreaArray
            .map((cat) => {
                
                function handleClickCat(e){
                    e.preventDefault();
                    console.log(`Category_id: ${cat.id}, Category_name:${cat.name}`);
                    setCategory(cat.name);
               }
                return <div>
                            <button className="catRow" onClick={handleClickCat} key={cat.id}>{cat.name}</button>
                       </div>
            });
            setCategoryArea(categoryMap);
    },[categoryAreaArray])

    useEffect(()=>{
    //inside a fat arrow function
        let url = `http://localhost:5000/user/question/${category}`;
        console.log(url);
        let parameter = {
            method: 'GET'
        }
        fetch(url, parameter)
            .then((res) => res.json())
            .then (data => {
                let qnArr = data.user;
                let processedQnArr = qnArr
                    .map((element) => {
                        //console.log(element.question);
                        function handleClickQn(e){
                            e.preventDefault();
                            setQuestionDisplay(element.question);
                            setAnswerDisplay(element.response);
                            console.log(`Question: ${element.question}, Response: ${element.response}`);
                        }
                        return <button className="qnCol" key={element.question_id} onClick={handleClickQn} >
                                {element.question}
                               </button>
                    });
                    setQuestionArea(processedQnArr)
                    console.log(processedQnArr);
            })
            .catch(err => {
                console.log(err);
            }); 
    }, [category])
    
    useEffect(() => {
        if (!uname) {
          //console.log(`HOME: navigate( '/login')` );
          navigate('/login');
        }
      }, [uname, navigate]);
    
    useEffect(()=>{
        if(uname){
            
            sessionStorage.setItem('uname', uname);
            const storedItem = sessionStorage.setItem('uname', uname);
            console.log(`sessionStorage: ${storedItem}`);
        }
    }, [uname]);

    useEffect(()=>{
        const storedUname = sessionStorage.getItem('uname');
        console.log(`storedUname: ${storedUname}`);
        unameSetter(storedUname);
    },[unameSetter]);
   
    useEffect(()=>{
        const handleTabClose = () =>{
            unameSetter("")
        }
        window.addEventListener('beforeunload', handleTabClose);
    },[unameSetter]);
    

    return(
        <section>
            <div className="dashboardContainer">
                <div className="dashboardHeader">
                    <h1>Q&A</h1>
                    <h2>Find the information you're looking for here</h2>
                </div>
                <div className="catBox">{categoryArea}</div>
                <div className="qnBox">{questionArea}</div>
                <div className="mainDisplay">
                    <div className="qnDisplay">Q: {questionDisplay}</div>
                    <div className="ansDisplay">A: {answerDisplay}</div>
                </div>
                <div className="userQn">
                    <form>
                        Can't find what you're looking for? Ask any question!
                        <input type="text" ref={userQuestionRef}></input>
                        <button onClick={handleQnSub}>Submit my question</button>
                    </form>
                </div>

            </div> 
        </section>
        
    )
};

export default Home;
