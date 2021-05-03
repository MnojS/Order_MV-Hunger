import React from 'react'
import './Home.css'
import Carousel from 'react-material-ui-carousel'
import burger1 from '../../assets/burger1.jpg'
import pizza1 from '../../assets/pizza1.jpg'

function Home() {
    return (
        <div className="home">
            <div className="home_carousel">
                <Carousel autoPlay animation='fade'>
                    <div>
                        <img src={burger1} alt="burger pic" className='pI' />
                    </div>
                    <div>
                        <img src={pizza1} alt="pizza pic"className='pI' />
                    </div>
                </Carousel>

            </div>
            
        </div>
    )
}

export default Home
