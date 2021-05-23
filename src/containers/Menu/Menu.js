import React from 'react'
import OrderBurger from '../../components/Card/Order/OrderBurger'
import OrderPizza from '../../components/Card/Order/OrderPizza'
import Heading from '../../components/Heading/Heading'
import MenuAbout from "../../components/MenuAbout/MenuAbout"
import "./Menu.css"

function Menu() {
    return (
        <div className="container"> 
                <Heading title="Our Menu" activeName="Menu"/> 
                <MenuAbout />
        </div>
    )
}

export default Menu
