import React from 'react'
import AddCart from '../../components/Card/Order/AddCart/AddCart'
import RecipeReviewCard from '../../components/Card/Order/Hehe'
import OrderBurger from '../../components/Card/Order/OrderBurger'
import OrderPizza from '../../components/Card/Order/OrderPizza'
import Title from '../../components/Card/Order/Title'
import "./Menu.css"

function Menu() {
    return (
        <div class='container'>
            {/* <RecipeReviewCard /> */}
            <Title/>
            <AddCart />
           {/* <OrderPizza />
           <OrderBurger /> */}
        </div>
    )
}

export default Menu
