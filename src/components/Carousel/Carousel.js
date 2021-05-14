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
                    <h3>Welcome 1</h3>
                    <h1>Pizza is not a 'trend' it's a way of life</h1>
                    <h2>Helllooooooo</h2>
                    <Buttons className="buttonGroup" />
                    </div>
                </div>
                <div>
                    <img src={bg_2} alt="home" className={"homePic"} />
                    <div className="Quote">
                    <h3>Welcome 2</h3>
                    <h1>Pizza is not a 'trend' it's a way of life</h1>
                    <h2>Helllooooooo</h2>
                    <Buttons className="buttonGroup" />
                    </div>
                </div>
            </Carousel>

         </div>
    )
}

export default carousel
