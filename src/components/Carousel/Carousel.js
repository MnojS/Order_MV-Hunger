import React from 'react'
import bg_1 from "../../assets/images/bg_1.png";
import bg_2 from "../../assets/images/bg_2.png";
import Buttons from "../UI/Button/Buttons";
import Carousel from "react-material-ui-carousel"

function carousel() {
    return (
        <div className="home">
            <Carousel autoPlay={false} animation="fade">
                    <div>
                        <img alt="home" src={bg_1} className={"homePic"} />
                        <div className="Quote">
                        <h3>Delicious</h3>
                        <h1>THERE'S NO BETTER FEELING IN THE WORLD THAN <br /> A WARM PIZZA BOX ON YOUR LAP</h1>
                        <h2>you'll have your <span className="orderSpan">Order</span> in No-Time</h2>
                        <Buttons className="buttonGroup" />
                        </div>
                    </div>
                    <div>
                        <img src={bg_2} alt="home" className={"homePic"} />
                        <div className="Quote">
                        <h3>Delightful</h3>
                        <h1>EVERYONE LIKES A BURGER NOW AND THEN , AND <br /> THAT'S ABSOLUTELY FINE </h1>
                        <h2>you'll have your <span className="orderSpan">Order</span> in No-Time</h2>
                        <Buttons className="buttonGroup" />
                        </div>
                    </div>
            </Carousel>

         </div>
    )
}

export default carousel
