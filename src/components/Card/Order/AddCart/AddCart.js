import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import './AddCart.css'


const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  
  }));
  

function AddCart() {

    const classes = useStyles();

    const menus = [
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
        },
        {
            id: "4",
            title: "Sicilian Pizza",
            src: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000615_1280.jpg",
            description: "Sicilian Pizza",
            price: 15,

        },
        {
            id: "5",
            title: "Greek Pizza",
            src: "https://cdn.pixabay.com/photo/2017/06/21/00/08/pizza-2425450_1280.jpg",
            description: "Greek Pizza",
            price: 10,

        },
        {
            id: "6",
            title: "Neapolitan Pizza",
            src: "https://cdn.pixabay.com/photo/2017/06/21/00/08/pizza-2425450_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,

        },
        {
            id: "7",
            title: "Chicago Pizza",
            src: "https://cdn.pixabay.com/photo/2017/01/22/19/20/pizza-2000615_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
  
        },
        {
            id: "8",
            title: "New York-Style Pizza",
            src: "https://cdn.pixabay.com/photo/2017/09/22/16/16/pizza-2776188_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
        },
        {
            id: "9",
            title: "Sicilian Pizza",
            src: "https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
        },
        {
            id: "10",
            title: "Greek Pizza",
            src: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
        },
    ]

    return (
        <div className="AddCart">
            {
               menus.map(
                   (items) => {
                       return (
                           <div key={items.id} className="pizzaOrder" style={{maxWidth:"300px" }}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        title={items.title}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={items.src}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                        </Typography>
                                    </CardContent>
                                        <IconButton>
                                        <AddShoppingCartIcon color="action" />
                                        </IconButton>
                                        <Button variant="contained" color="secondary">Order Now</Button>
                                </Card>
                           </div>
                       )
                   }
               )
           }
        </div>
    )
}

export default AddCart
