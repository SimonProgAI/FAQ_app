import React from "react";
import '../App.css';


function DashboardComponents(){
    return(
        <section>
            
            <div className="dashboardContainer">
                <div className="dashboardHeader">
                    <h2>header</h2>
                </div>
                <div className="questionsCol">
                    <div className="questionBox">Question 1 </div>
                    <div className="questionBox">Question 2 </div>
                    <div className="questionBox">Question 3 </div>
                    <div className="questionBox">Question 4 </div>
                    <div className="questionBox">Question 5 </div>
                    <div className="questionBox">Question 6 </div>
                </div>
                <div className="mainDisplay">
                    <div className="questionDisplay">question displayed here</div>
                    <div className="answerDisplay">answer displayed here</div>
                </div>
                <div className="dashboardFooter">
                    <h2>Footer</h2>
                </div>

            </div> 
        </section>
        
    )
};

export default DashboardComponents;
