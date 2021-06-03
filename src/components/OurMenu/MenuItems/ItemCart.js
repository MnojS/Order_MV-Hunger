import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,
    },

    media: {
      height: 5,
      paddingTop: '56.25%', // 16:9
    },
  
  }));

function ItemCart({items }) {
    
    const classes = useStyles();
    const [count , setCount] = useState(0);
    const [price , setPrice] = useState(items.price);

    let clickAddHandler = () => {
        setCount(count + 1)
        setPrice(items.price= items.price + items.price)
    }
    let clickAReduceHandler = () => {
        setCount(count - 1)
        setPrice(items.price= items.price - items.price)
    }
    return (
               <div key={items.id} className="cardMenu" style={{maxWidth:"300px" }}>
                    <Card 
                        className={"root"} 
                        style={{color:"white" , 
                        backgroundColor:"black" , 
                        cursor:"pointer" ,  }} >
                        <CardHeader 
                            title={items.title}
                        />
                        <CardMedia
                            className={classes.media}
                            image={items.src}
                        />
                        <CardContent>
                            <Typography variant="body2" color="" component="h2">
                            A perfect party dish and a fun meal to cook together with your
                            guests. <br /> <hr />
                            <span  ><h4  >Price : ${items.price} </h4></span>
                            <span>Quantity : 
                                <Button 
                                    onClick={ () => clickAReduceHandler() }  
                                    variant="outlined" 
                                    color="default" 
                                    style={{color:"white" , }}>-</Button> 
                                {count} 
                                <Button 
                                    onClick={ () => clickAddHandler() } 
                                    variant="outlined" 
                                    color="default" 
                                    style={{color:"white" , }}>+</Button> 
                            </span> 
                            </Typography>
                        </CardContent>
                            <Button  variant="text" color="secondary" style={{marginLeft:"100px" , color:"orange"}}>
                                <IconButton style={{backgroundColor:"transparent" , color:"orange" , opacity:"" }}>
                                <AddShoppingCartIcon color="" />
                                </IconButton>
                                    Add to Cart
                            </Button>
                    </Card>
               </div>
           
    )
}

export default ItemCart
