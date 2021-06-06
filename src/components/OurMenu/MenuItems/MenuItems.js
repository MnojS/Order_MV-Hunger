import React from 'react'
import './MenuItems.css'
import ItemCart from './ItemCart';
  
function MenuItems() {


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
            price: 37,
  
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
            title: "Burger meat",
            src: "https://cdn.pixabay.com/photo/2018/03/04/20/08/burger-3199088_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 12,
        },
        {
            id: "10",
            title: "Sandwich burger",
            src: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 23,
        },
        {
            id: "11",
            title: "Norm Burg",
            src: "https://cdn.pixabay.com/photo/2017/11/12/21/11/hamburger-2943825_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 13,
        },
        {
            id: "12",
            title: "Cheesy B",
            src: "https://cdn.pixabay.com/photo/2017/01/13/03/02/burgers-1976198__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 18,
        },
        {
            id: "13",
            title: "Dochees",
            src: "https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 20,
        },
        {
            id: "14",
            title: "Hamburger Burger",
            src: "https://cdn.pixabay.com/photo/2019/10/10/14/51/hamburger-4539716__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 19,
        },
        {
            id: "15",
            title: "Burger Fries",
            src: "https://cdn.pixabay.com/photo/2020/03/29/22/42/burger-4982550__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 19,
        },
        {
            id: "16",
            title: "CheesBurger",
            src: "https://cdn.pixabay.com/photo/2015/10/19/14/05/burger-996037__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 19,
        },
    ]

    return (
        <div className="MenuItems">
           {menus.map((items) => {
               return <ItemCart items={items} price={items.price} />
           })}
        </div>
    )
}
export default MenuItems