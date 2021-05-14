import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel"
import MediaCard from "../../components/Cart/MediaCard";
import Welcome from "../../components/Welcome/Welcome";

function Home() {
  return (
    <React.Fragment>
      <Carousel />
      <Welcome />
      <MediaCard />
    </React.Fragment>
  );
}

export default Home;
