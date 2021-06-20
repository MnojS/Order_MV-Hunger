import React from 'react'
import { HighlightOff } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Button } from '@material-ui/core'
import "./CartItem.css"

function CartItem() {

    const cart = [
        {
            id: "1",
            title: "Neapolitan Pizza",
            src: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
            description: "Neapolitan Pizza",
            price: 23,

        },
        {
            id: "2",
            title: "Chicago Pizza",
            src: "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg",
            description: "Chicago Pizza",
            price: 19,
        },
        {
            id: "3",
            title: "Neid Pizza",
            src: "https://cdn.pixabay.com/photo/2017/09/22/16/16/pizza-2776188_1280.jpg",
            description: "New York-Style Pizza",
            price: 50,
        }
    ]

    return(
        <div className="CartItem">
           {cart.map((added) => {
               return(
               <div>
                   <div
                   style={{display:"grid" ,
                   gridTemplateColumns: "repeat(3,auto)" , 
                   margin:"12px" , width:"60%"}} 
                   className="cartContent">
                        
                        <img 
                        className="cartImges" 
                        src={added.src} 
                        alt="cart" 
                        width="200px" />
                        
                        <p 
                        style={{marginLeft:"30px"}}>
                            {added.title} <br /> 
                            Total price : $ {added.price}
                            <br />
                            <hr />
                            <Button  
                            variant="outlined" 
                            color="secondary" 
                            style={{marginTop:"30px"}}>
                                View Details</Button>
                        </p>
                        
                        <div style={{marginRight:"20%"}}>
                            <IconButton style={{backgroundColor:"transparent" , color:"orange" , opacity:"" }}>
                                <Button variant="contained" color="secondary" className="removeCart" >REMOVE</Button>
                            </IconButton>
                        </div>    
                   </div>
               </div>
               )
           })}
           hello
        </div>            
   )}

export default CartItem;
