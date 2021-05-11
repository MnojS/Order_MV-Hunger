import React from 'react'
import './DrawerToggleButton.css'
import PizzaLogo from '../../../assets/PizzaLogo.png'

const DrawerToggleButton = (props) => (
    <button className='toggle-button' onClick={props.click}>
        <img alt="logo" src={PizzaLogo} className="Logoo" />
    </button>

)
    

export default DrawerToggleButton;
