import React from 'react'
import OrderBurger from '../../components/Card/Order/OrderBurger'
import OrderPizza from '../../components/Card/Order/OrderPizza'
import Title from '../../components/Card/Order/Title'
import Heading from '../../components/Heading/Heading'
import "./Menu.css"

function Menu() {
    return (
        <div className="container"> 
            
            <Heading title="Our Menu"
                activeName="Menu"/>
            <OrderPizza />
            <OrderBurger />
        </div>
    )
}

export default Menu
