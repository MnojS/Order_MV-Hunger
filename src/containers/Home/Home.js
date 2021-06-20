import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel"
import MediaCard from "../../components/Card/MediaCard";
import Welcome from "../../components/Welcome/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import Awards from "../../components/Awards/Awards";
import {Link} from 'react-router-dom'

function Home(props) {
  return (

    <React.Fragment>
      {props.user? ( <div className="SignOutButton"><Link  onClick={props.handleLogout}>Logout</Link></div>):
        (<div className="SignInButton"><Link to="/sign-in" >SignIn</Link></div>) }
      <Carousel />
      <OurServices />
      <Welcome />
      <Awards /> 
      <MediaCard />
      
    </React.Fragment>  
  );
}

export default Home;
