import React from 'react'
import "./OurServices.css"
import hamicon1 from "../../assets/png/ham.png"
import sccotericon from "../../assets/png/scooter.png"
import pizzaicon from "../../assets/png/pizza.png"
const OurServices = () => {
    return (
        <div className="OurServices">
           <div className="container">
               <h2>OUR SERVICES</h2>
               <p> far away, behind the word mountains, far from the countries<br/>Vokalia and Consonantia, there live the blind texts. </p>
            </div>
            <div className="media">
            <div className="icon">
                <div className="icons" >
                    <img src={hamicon1} />
                    
                    
                </div>
                <div className="icons">
                    <img src={sccotericon} />
                    
                </div>
                <div className="icons">
                    <img src={pizzaicon} />
                    
                    
                </div>
                
            </div>
        </div>
        <div className="content">
                    <div >
                       
                       <h4>HEALTHY FOODS</h4>
                       <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. </p>
                    
                    </div>
                    <div >
                   
                        <h4>FASTEST DELIVERY</h4>
                        <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. </p> 
                    </div>
                    <div>
                       <h4>ORIGINAL RECIPES</h4>
                       <p> Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. </p>
                    </div>
                </div>
       
    </div>
            
    )
}

export default OurServices
