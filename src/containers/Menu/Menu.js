import React from 'react'
import Heading from '../../components/Heading/Heading'
import MenuAbout from "../../components/OurMenu/MenuAbout/MenuAbout"
import MenuItems from '../../components/OurMenu/MenuItems/MenuItems'
import "./Menu.css"

function Menu() {
    return (
        <div className="container"> 
                <Heading title="Our Menu" activeName="Menu"/> 
                {/* <MenuItems /> */}
                <MenuAbout />
                <MenuItems />
                
        </div>
    )
}

export default Menu
