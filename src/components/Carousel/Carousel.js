import React from 'react'
import bg_1 from "../../assets/images/bg_1.png";
import bg_2 from "../../assets/images/bg_2.png";
import Buttons from "../UI/Button/Buttons";
import Carousel from "react-material-ui-carousel"

function carousel() {
    return (
        <div className="home">
            <Carousel autoPlay={true} animation="fade">
                    <div>
                        <img alt="home" src={bg_1} className={"homePic"} />
                        <div className="Quote">
                        <h3>Delicious</h3>
                        <h1>There's no better feeling in the world than<br /> a warm Pizza Box on your lap</h1>
                        <h2>you'll have your <span className="orderSpan">Order</span> in No-Time</h2>
                        <Buttons  className="buttonGroup" />
                        </div>
                    </div>
                    <div>
                        <img src={bg_2} alt="home" className={"homePic"} />
                        <div className="Quote">
                        <h3>Delightful</h3>
                        <h1>Everyone likes a burger now and then , and<br /> That's absolutely fine ! </h1>
                        <h2>you'll have your <span className="orderSpan">Order</span> in No-Time</h2>
                        <Buttons className="buttonGroup" />
                        </div>
                    </div>
            </Carousel>

         </div>
    )
}

export default carousel
