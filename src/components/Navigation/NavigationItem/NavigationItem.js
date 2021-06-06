import "../Toolbar/Toolbar.css"
import cartImg from "../../../assets/images/cart.png"
const NavigationItem= [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
  },
  {
    title: "Menu",
    url: "/menu",
    cName: "nav-links",
  },
  {
    title: "Services",
    url: "/services",
    cName: "nav-links",
  },
  {
    title: "Blog",
    url: "/blog",
    cName: "nav-links",
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
  },
  {
    
    title:
      <img src={cartImg}/>
    ,
    url: "/cart",
    cName: "",
  },
];
export default NavigationItem;
