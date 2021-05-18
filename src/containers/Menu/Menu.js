import React from 'react'
import OrderBurger from '../../components/Card/Order/OrderBurger'
import OrderPizza from '../../components/Card/Order/OrderPizza'
import Title from '../../components/Card/Order/Title'
import "./Menu.css"

function Menu() {
    return (
        <div class='container'>
            <Title/>
           <OrderPizza />
           <OrderBurger />
        </div>
    )
}

export default Menu
