import React from 'react'
import './Heading.css'
import ingredient from '../../assets/images/image.jpg'
import { Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'

const Heading = (props) =>  {
    return (
        <React.Fragment> 
        <div className="container">
            <img src={ingredient} alt="Snow" style={{width:"100%"}}></img>
            <div className="centered">{props.title}
                <div className="Button">
                    <Button 
                        
                        color="inherit"
                        variant='outlined'
                        startIcon={<HomeIcon />}
                        >Home</Button>
                        <Button 
                        color="inherit"
                        variant='outlined'
                        startIcon={<RestaurantMenuIcon />}
                        >{props.activeName}</Button>

                </div>
                
            </div>
        </div>
        </React.Fragment>
    )
}

export default Heading
