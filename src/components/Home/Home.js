import React from 'react'
import './Home.css'
import Buttons from '../Home/Button/Buttons'
import Carousel from 'react-material-ui-carousel'
import bg_1 from '../../assets/bg_1.png'
import bg_2 from '../../assets/bg_2.png'

function Home() {

    return (
        <div className="home">
            <Buttons className="buttonGroup"/>
            <Carousel>
                <div>
                    <img src={bg_2} className={'homePic'}/>
                    <h1>Hello</h1>
                </div>
                <div>
                    <img src={bg_1} className={'homePic'} />
                    <h1>Helooooo</h1>
                </div>
            </Carousel>
        </div>
    )
}

export default Home


