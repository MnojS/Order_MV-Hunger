import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel"
import MediaCard from "../../components/Card/MediaCard";
import Welcome from "../../components/Welcome/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import Awards from "../../components/Awards/Awards";

function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <OurServices />
      <Welcome />
      <Awards />
      <MediaCard />
      
    </React.Fragment>  
  );
}

export default Home;
