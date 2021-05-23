import React from 'react'
import AddCart from '../../components/Card/Order/AddCart/AddCart'
import RecipeReviewCard from '../../components/Card/Order/Hehe'
import OrderBurger from '../../components/Card/Order/OrderBurger'
import OrderPizza from '../../components/Card/Order/OrderPizza'
import Title from '../../components/Card/Order/Title'
import Heading from '../../components/Heading/Heading'
import "./Menu.css"

function Menu() {
    return (
<<<<<<< HEAD
        <div class='container'>
            {/* <RecipeReviewCard /> */}
            <Title/>
            <AddCart />
           {/* <OrderPizza />
           <OrderBurger /> */}
=======
        <div className="container"> 
            
            <Heading title="Our Menu"
                activeName="Menu"/>
            <OrderPizza />
            <OrderBurger />
>>>>>>> 98bda8a348d48ed5dd034a8e407511c52a0e3934
        </div>
    )
}

export default Menu
