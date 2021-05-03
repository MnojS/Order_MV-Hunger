import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './SideDrawer.css'


const SideDrawer = (props) => {
    

    return(
        <nav className='side-drawer'>
            <ul>
                        {MenuItems.map((items , index) => {
                            return (
                                <li> 
                                    <a href={items.url} >
                                        {items.title}
                                    </a> 
                                </li>
                            )
                        })}
                        
            </ul>
        </nav>
    )

  
}
export default SideDrawer
