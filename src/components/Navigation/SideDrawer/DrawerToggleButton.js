import React, { useState } from "react";
import "./DrawerToggleButton.css";
import PizzaLogo from "../../../assets/images/PizzaLogo.png";
import ToolbarLogo from '../../../assets/png/MVHunger.png'
import SideDrawer from "./SideDrawer";

const DrawerToggleButton = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const drawerToggleClickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const sideDrawerClosedHandler = () => {
    setShowSidebar(false);
  };

  return (
    <React.Fragment>
      <button className="toggle-button" onClick={drawerToggleClickHandler}>
        <img alt="logo" src={ToolbarLogo} className="Logoo" />
      </button>
      {window.innerWidth <= 500 ? (
        <SideDrawer open={showSidebar} closed={sideDrawerClosedHandler} />
      ) : null}
    </React.Fragment>
  );
};

export default DrawerToggleButton;
