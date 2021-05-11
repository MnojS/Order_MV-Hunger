import { Typography } from '@material-ui/core'
import React from 'react'
import burgerB from '../../../assets/burgerB.jpg'
import './OrderCart.css'

function OrderCart() {
    return (
        <section className='container'>
                <div className="blockOne">
                    <h1>MV-HUNGER MEALS</h1>
                    <Typography variant="p" color="textSecondary" component="p">
                    Far far away, behind the word mountains, 
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                    </Typography>
                </div>
                <div className="blockTwo">
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="container-wrap">
                        <img src={burgerB} />
                        <div className="orderInfo" >
                            <h3>Itallian</h3>
                            <p>Order Now</p>
                            <p>$2.90</p>
                            <button>Order</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default OrderCart