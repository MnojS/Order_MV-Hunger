import React from 'react'
import './OrderBurger.css'

function OrderBurger() {

    const menus = [
        {
            id: "1",
            title: "Neapolitan Pizza",
            src: 'https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_1280.jpg',
            description: "Neapolitan Pizza",
            price: 23,
            colors:["red","black","crimson","teal"],
            count: 1
        },
        {
            id: "2",
            title: "Chicago Pizza",
            src: "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_1280.jpg",
            description: "Chicago Pizza",
            price: 19,
            colors:["red","crimson","teal"],
            count: 1
        },
        {
            id: "3",
            title: "New York-Style Pizza",
            src: "https://cdn.pixabay.com/photo/2017/09/18/16/59/burger-2762431_1280.jpg",
            description: "New York-Style Pizza",
            price: 50,
            colors:["lightblue","white","crimson","teal"],
            count: 1
        },
        {
            id: "4",
            title: "Sicilian Pizza",
            src: "https://cdn.pixabay.com/photo/2017/12/09/23/04/bread-3008950_1280.jpg",
            description: "Sicilian Pizza",
            price: 15,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "5",
            title: "Greek Pizza",
            src: "https://cdn.pixabay.com/photo/2018/05/30/19/12/burger-3442206_1280.jpg",
            description: "Greek Pizza",
            price: 10,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "6",
            title: "Neapolitan Pizza",
            src: "https://cdn.pixabay.com/photo/2018/03/04/20/08/burger-3199088_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "7",
            title: "Chicago Pizza",
            src: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "8",
            title: "New York-Style Pizza",
            src: "https://cdn.pixabay.com/photo/2018/05/30/19/12/burger-3442206_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "9",
            title: "Sicilian Pizza",
            src: "https://cdn.pixabay.com/photo/2019/08/05/07/31/burger-4385386__340.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
        {
            id: "10",
            title: "Greek Pizza",
            src: "https://cdn.pixabay.com/photo/2017/12/09/23/04/bread-3008950_1280.jpg",
            description: "UI/UX designing, html css tutorials",
            price: 17,
            colors:["orange","black","crimson","teal"],
            count: 1
        },
    ]


    return (
        <div className="Order">
            {
               menus.map(
                   (items) => {
                       return (
                        <div key={items.id} className="burgerOrder">
                            <div>
                                <img className="orderMenu" src={items.src} alt={items.title} width='250'/>
                            </div>
                            <span className="price">Price {items.price}$</span>
                            <br />
                            <span className="title">
                                {items.title}
                            </span>  <br />
                            {items.description}
                            <button className="addCartButton">Add To cart</button>
                    </div>
                       )
                   }
               )
           }
        </div>
    )
}

export default OrderBurger
