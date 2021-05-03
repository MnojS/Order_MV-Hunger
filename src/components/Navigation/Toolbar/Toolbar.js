import React from 'react'
import MenuItems from "../MenuItems/MenuItems"
import "../Toolbar/Navbar.css"
import PizzaLogo from '../../../assets/PizzaLogo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "../SideDrawer/DrawerToggleButton.css"

const Toolbar = (props) => (
    <header>
        <nav>
           <div className="NavbarItems">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <h1 className='navbar-logo'>
                <img src={PizzaLogo} className="Logo" />
            </h1>
            <ul className = 'nav-menu' >
                    {MenuItems.map((items , index) => {
                        return (
                            <li> 
                                <a className={items.cName} href={items.url} >
                                    {items.title}
                                </a> 
                            </li>
                        )
                    })}
                    
                </ul>
            </div>

        </nav>
    </header>
)
    


export default Toolbar;
