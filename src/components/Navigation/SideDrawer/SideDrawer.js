import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer','Close'];
    if(props.open) {
        attachedClasses = ['side-drawer', 'Open']
    }

    return(
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <nav className={attachedClasses.join(' ')}>
                <ul>
                            {NavigationItem.map((items ) => {
                                return (
                                    <li key={items.title}> 
                                        <a href={items.url} >
                                            {items.title}
                                        </a> 
                                    </li>
                                )
                            })}
                            
                </ul>
            </nav>
        </React.Fragment>
    )

  
}
export default SideDrawer
