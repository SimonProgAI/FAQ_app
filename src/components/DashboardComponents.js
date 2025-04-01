import React, { use } from "react";
import {useState, useEffect, useRef} from 'react';
import '../App.css';

function DashboardComponents(){
  //I might do away with the category being replaced with questions. OR USE TWO BUTTONS FOR TRUE AND FALSE for setAreaSwitch
  //create input refs to be able to post questions
  //the url of the fetch and the server should post to the databank
  //Logout
  //Uname of the user logged in displayed in the menu.
  //Can't access dashboard without successful login.
   const [questionArea, setQuestionArea] = useState();
   const [questionDisplay, setQuestionDisplay] = useState("");
   const [answerDisplay, setAnswerDisplay] = useState("");
   const [areaSwitch, setAreaSwitch] = useState(true);
   const [category, setCategory] = useState('category_1');
   const [categoryArea, setCategoryArea] = useState ("");
   const [categoryAreaArray, setCategoryAreaArray] = useState([
        {id: '1', name: 'category_1'},
        {id: '2', name: 'category_2'},
        {id: '3', name: 'category_3'},
        {id: '4', name: 'category_4'},
        {id: '5', name: 'category_5'}
   ]);
   const [userQuestion, setUserQuestion] = useState("");
   
   const userQuestionRef = useRef();



   
   
   useEffect(()=>{
        const categoryMap = categoryAreaArray
            .map((cat) => {
                
                function handleClickCat(e){
                    e.preventDefault();
                    console.log(`Category_id: ${cat.id}, Category_name:${cat.name}`);
                    setCategory(cat.name);
                    setAreaSwitch(false);
               }
                return <div>
                            <button className="questionsCol" onClick={handleClickCat} key={cat.id}>{cat.name}</button>
                    </div>
            });
        if(areaSwitch){ // to refactor
            setCategoryArea(categoryMap);
            setQuestionArea("");
        };
    //},[]);

   //useEffect(()=>{
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
                       
                       return <button className="questionsCol" key={element.question_id} onClick={handleClickQn} >
                                {element.question_id}.{element.question}
                              </button>
                    });
                if(areaSwitch){ // to refactor
                    setQuestionArea("");
                }else{
                    setQuestionArea(processedQnArr)
                }
                console.log(processedQnArr);
            })
            .catch(err => {
                console.log(err);
            });
        },[category]);

    return(
        <section>
            
            <div className="dashboardContainer">
                <div className="dashboardHeader">
                    <h2>header</h2>
                </div>
                <div>{categoryArea}</div>
                <div>{questionArea}</div>
                <div className="mainDisplay">
                    <div className="questionDisplay">{questionDisplay}</div>
                    <div className="answerDisplay">{answerDisplay}</div>
                    <button>Back to categories</button>
                </div>
                <div className="dashboardFooter">
                    <h2>Footer</h2>
                </div>

            </div> 
        </section>
        
    )
};

export default DashboardComponents;
