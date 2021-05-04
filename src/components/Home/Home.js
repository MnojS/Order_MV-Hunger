import React from 'react'
import './Home.css'
import Buttons from '../Home/Button/Buttons'
import Carousel from 'react-material-ui-carousel'
import bg_1 from '../../assets/bg_1.png'
import bg_2 from '../../assets/bg_2.png'
import ImgMediaCard from './Cart/Cart'

function Home() {

    return (
        <div className="home">
            {/* <Buttons className="buttonGroup"/> */}
            <Carousel autoPlay animation="fade">
                <div>
                    <img src={bg_1} className={'homePic'}  />
                    <div className="Quote">
                        <h3>Welcome 1</h3>
                        <h1>Pizza is not a 'trend' it's a way of life</h1>
                        <h2>Helllooooooo</h2>
                        <Buttons className="buttonGroup"/>
                    </div>
                </div>
                <div>
                    <img src={bg_2} className={'homePic'} />
                    <div className="Quote">
                        <h3>Welcome 2</h3>
                        <h1>Pizza is not a 'trend' it's a way of life</h1>
                        <h2>Helllooooooo</h2>
                        <Buttons className="buttonGroup"/>
                    </div>  
                </div>
            </Carousel>

            {/* <ImgMediaCard /> */}
        </div>
    )
}

export default Home


