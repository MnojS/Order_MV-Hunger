import React from 'react'
import MenuItems from '../MenuItems/MenuItems'
import './SideDrawer.css'
import Aux from '../../hoc/Auxillary/Auxillary'
import Backdrop from '../../hoc/Backdrop/Backdrop'


const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer','Close'];
    if(props.open) {
        attachedClasses = ['side-drawer', 'Open']
    }

    return(
        <Aux >
            <Backdrop show={props.open} clicked={props.closed} />
            <nav className={attachedClasses.join(' ')}>
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
        </Aux>
    )

  
}
export default SideDrawer
