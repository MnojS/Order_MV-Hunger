import React from 'react'
import './DrawerToggleButton.css'

const DrawerToggleButton = (props) => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button__line'/>
        <div className='toggle-button__line' />
        <div className='toggle-button__line'/>
    </button>

)
    

export default DrawerToggleButton;
