import React from 'react'
import MenuItems from "../MenuItems/MenuItems"
import "../Toolbar/Navbar.css"
// import PizzaLogo from '../../../assets/PizzaLogo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
// import "../SideDrawer/DrawerToggleButton.css"

const Toolbar = (props) => (
    
    <header className= "Toolbar">
        
        <div>
             <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
        <nav className="DesktopOnly">
        
           <div className="NavbarItems">
            <h1 className='navbar-logo'>        
                {/* <img alt="logo" src={PizzaLogo} className="Logo" /> */}
            </h1>
            <ul className = 'nav-menu' >
                    {MenuItems.map((items ) => {
                        return (
                            <li key={items.title}> 
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
