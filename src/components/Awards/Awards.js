import React from 'react'
import "./Awards.css"
import pizzaicon from "../../assets/png/pizzzaaa.png"
import awardicon from "../../assets/png/Award.png"
import peopleicon from "../../assets/png/people.png"
import cookhaticon from "../../assets/png/cookhat.png"


function Awards() {
    return (
        <section className="Awards">
            <div className="AwardsContainer">
                <div className="Boxes">
                    <div className="img">
                        <div>
                       <center><img src={pizzaicon}></img></center> 
                        </div>
                        
                        <h2>100</h2>
                        <p>Pizza Branches</p>
                    </div>
                    <div className="img">
                        <div>
                        <center><img src={awardicon}></img></center>
                        </div>
                        
                        <h2>85</h2>
                        <p>Number of Awards</p>
                    </div>
                    <div className="img">
                        <div>
                        <center><img src={peopleicon}></img></center>
                        </div>
                        
                        <h2>10,567</h2>
                        <p>Happy Customer</p>
                    </div>
                    <div className="img">
                        <div>
                        <center><img src={cookhaticon}></img></center>
                        </div>
                        
                        <h2>900</h2>
                        <p>Staff</p>
                    </div>
                    
                </div>

            </div>
            
        </section>
    )
}

export default Awards
