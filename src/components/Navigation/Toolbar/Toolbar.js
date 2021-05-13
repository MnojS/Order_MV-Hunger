import React from 'react'
import MenuItems from "../MenuItems/MenuItems"
import "../Toolbar/Navbar.css"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { Route, NavLink, Switch} from 'react-router-dom'
import Menu from '../../Menu/Menu'
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
                                <NavLink to={items.url} activeStyle={{
                                    color: 'aliceblue',
                                    textDecoration: 'none',
                                    padding: '0.5rem 1rem',
                                    fontSize: '17px'
                                }}>
                                    {items.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    
                </ul>
                <Switch>
                <Route path='/menu' component={Menu} />
                <Route path='/services' component={Menu} />
                <Route path='/blog' component={Menu} />
                <Route path='/about' component={Menu} />
                <Route path='/contact' component={Menu} />
                </Switch>

            </div>

        </nav>
    </header>
)
    


export default Toolbar;
